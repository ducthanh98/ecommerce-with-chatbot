import {Button, Checkbox, Form, Input, message, notification, Select} from "antd";
import {useContext, useState} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {MinusCircleOutlined, PlusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {UploadFile} from "antd/es/upload/interface";
import {Upload} from "../../../components/shared/utils/Upload";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "./api";
import {useRouter} from "next/router";

const styles = {
    optionName: {
        width: '30%'
    },
    optionValue: {
        width: '45%'
    },
    variantWrapper: {
        marginBottom: '-15px'
    },
    variantForm: {
        width: '30%',
        marginRight: '2%'
    },
    attributeAction: {
        marginLeft: '15px',
        marginTop: '6px',
        fontSize: '20px'
    }

}

const AdminCreateProduct = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([] as UploadFile[]);
    const router = useRouter()


    const layout = {
        labelCol: {
            span: 4
        },
        wrapperCol: {
            span: 20
        }
    };
    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: {span: 24, offset: 0},
            sm: {span: 20, offset: 4},
        },
    };


    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16
        }
    };


    const renderBtnSubmit = () => {
        return (
            <Button type="primary" htmlType="submit" className="login-btn">
                Submit
            </Button>
        );
    };

    const formItems = [
        {
            key: 0,
            label: "Name",
            initialValue: '',
            name: "name",
            rules: [
                {
                    required: true,
                    message: "Product name is required"
                }
            ],
            render: <Input/>
        },
        {
            key: 1,
            label: "Description ",
            name: "description",
            initialValue: '',
            render: <Input.TextArea/>
        },
        {
            key: 2,
            label: "Activate ",
            name: "activate",
            render: <Checkbox checked/>
        },
        {
            key: 3,
            label: "Images",
            render: <Upload fileList={fileList} setFileList={setFileList} multiple={true}/>
        }
    ];

    const confirmBtns = [
        {
            key: 4,
            className: "btn-wrap",
            layout: tailLayout,
            render: renderBtnSubmit()
        }
    ];

    const handleGenerateVariant = () => {
        const {attributes, name} = form.getFieldsValue()
        const data = []
        const length = attributes.length;
        const tmp = {};

        if (!attributes[0].attribute || !attributes[0].values || !name) {
            return
        }
        let idx = 0;

        for (let i = 0; i < attributes[0].values.length; i++) {
            if (attributes[0].values[i] === '') {
                return message.error('Attribute name or value can\'t be empty');
            } else {
                tmp['attribute1_name'] = attributes[0].attribute
                tmp['attribute1_value'] = attributes[0].values[i]
            }
            if (length === 1 || !attributes[1].attribute || !attributes[1]) {
                data.push({
                    attribute1_value: tmp['attribute1_value'],
                    attribute1_name: tmp['attribute1_name'],
                    attribute2_value: '',
                    attribute2_name: '',
                    attribute3_value: '',
                    attribute3_name: '',
                    price: 0,
                    quantity: 0,
                    key: idx,
                    name: idx,
                    variant_name: `${name} ${tmp['attribute1_value']}`
                })
                idx++;
                continue
            }

            for (let j = 0; j < attributes[1].values.length; j++) {
                if (attributes[1].values[j] !== '') {
                    tmp['attribute2_name'] = attributes[1].attribute
                    tmp['attribute2_value'] = attributes[1].values[j]
                }

                if (length === 2) {
                    data.push({
                        attribute1_value: tmp['attribute1_value'],
                        attribute1_name: tmp['attribute1_name'],
                        attribute2_value: tmp['attribute2_value'],
                        attribute2_name: tmp['attribute2_name'],
                        attribute3_value: '',
                        attribute3_name: '',
                        price: 0,
                        quantity: 0,
                        key: idx,
                        name: idx,
                        variant_name: `${name} ${tmp['attribute1_value']} - ${tmp['attribute2_value']}`
                    })
                    idx++;
                    continue
                }

                for (let k = 0; k < attributes[2].values.length; k++) {
                    if (attributes[2].values[k] !== '') {
                        tmp['attribute3_name'] = attributes[2].attribute;
                        tmp['attribute3_value'] = attributes[2].value[k];
                    }

                    data.push({
                        attribute1_value: tmp['attribute1_value'],
                        attribute1_name: tmp['attribute1_name'],
                        attribute2_value: tmp['attribute2_value'],
                        attribute2_name: tmp['attribute2_name'],
                        attribute3_value: tmp['attribute3_value'],
                        attribute3_name: tmp['attribute3_name'],
                        price: 0,
                        quantity: 0,
                        key: idx,
                        name: idx,
                        variant_name: `${name} ${tmp['attribute1_value']} - ${tmp['attribute2_value']} - ${tmp['attribute3_value']}`
                    })
                    idx++;

                }

            }

        }
        form.setFieldsValue({variants: data})
    }

    const onFinish = async (values) => {
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        if (fileList.length < 1) {
            return message.error("Image is required")
        }

        values.images = [fileList[0].response ? fileList[0].response.filenames[0] : fileList[0].uid]

        const result = await api.createProduct(values)

        if (result.error) {
            dispatchLoading({type: SET_LOADING, payload: false} as Action)

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }

        dispatchLoading({type: SET_LOADING, payload: false} as Action)
        notification.success({
            message: 'Fashion and Clothing Shop',
            placement: 'topLeft',
            className: 'custom-notification-antd',
            description: "Successfully"
        });
        router.push('/products')
    }

    return (
        <>
            <Form {...layout} name="basic" onFinish={onFinish} form={form}>
                {formItems.map(item => (
                    <Form.Item
                        label={item.label}
                        name={item.name}
                        rules={item.rules}
                        key={item.key}
                        className={item.className}
                        {...item.layout}
                        initialValue={item.initialValue}
                    >
                        {item.render}
                    </Form.Item>
                ))}

                <Form.List name="attributes" initialValue={[{
                    key: 0,
                    name: '0',
                    attribute: ''

                }]}>
                    {(fields, {add, remove}, {errors}) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    label={index === 0 ? 'Attributes' : ''}
                                    {...(index === 0 ? layout : formItemLayoutWithOutLabel)}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                    >
                                        <Input.Group compact>
                                            <Form.Item
                                                name={[field.name, 'attribute']}
                                                style={styles.optionName}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Attribute name is required"
                                                    }
                                                ]}>
                                                <Input placeholder="Attribute name" type={"text"}/>
                                            </Form.Item>
                                            <Form.Item
                                                name={[field.name, 'values']}
                                                style={styles.optionValue}

                                            >
                                                <Select mode={'tags'}
                                                        style={{width: '100%'}}
                                                        open={false}
                                                        placeholder="Attribute value"
                                                        onChange={handleGenerateVariant}
                                                >
                                                </Select>
                                            </Form.Item>
                                            {fields.length < 3 ? (
                                                <PlusCircleOutlined
                                                    style={styles.attributeAction}
                                                    className="dynamic-delete-button"
                                                    onClick={add}
                                                />
                                            ) : null}
                                            {fields.length > 1 ? (
                                                <MinusCircleOutlined
                                                    style={styles.attributeAction}
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            ) : null}

                                        </Input.Group>

                                    </Form.Item>

                                </Form.Item>

                            ))}
                        </>
                    )}
                </Form.List>

                <Form.List name="variants">
                    {(fields, {add, remove}, {errors}) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    label={index === 0 ? 'Variants' : ''}
                                    {...(index === 0 ? layout : formItemLayoutWithOutLabel)}
                                    required={false}
                                    key={field.key}
                                    style={styles.variantWrapper}
                                >
                                    <Form.Item
                                        {...field}
                                    >
                                        <Input.Group compact>
                                            <Form.Item
                                                name={[field.name, 'variant_name']}
                                                style={styles.variantForm}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Missing variant name"
                                                    }
                                                ]}>
                                                <Input placeholder="Variant name"/>
                                            </Form.Item>
                                            <Form.Item
                                                name={[field.name, 'quantity']}
                                                style={styles.variantForm}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Missing quantity"
                                                    }
                                                ]}>
                                                <Input placeholder="Quantity"/>
                                            </Form.Item>
                                            <Form.Item
                                                name={[field.name, 'price']}
                                                style={styles.variantForm}
                                                rules={[{required: true, message: 'Missing price'}]}
                                            >
                                                <Input placeholder="Variant price"/>
                                            </Form.Item>
                                        </Input.Group>

                                    </Form.Item>

                                </Form.Item>

                            ))}
                        </>
                    )}
                </Form.List>

                {confirmBtns.map(item => (
                    <Form.Item
                        label={item.label}
                        name={item.name}
                        rules={item.rules}
                        key={item.key}
                        className={item.className}
                        {...item.layout}
                        initialValue={item.initialValue}
                    >
                        {item.render}
                    </Form.Item>
                ))}
            </Form>
        </>
    )
}
export default AdminCreateProduct;