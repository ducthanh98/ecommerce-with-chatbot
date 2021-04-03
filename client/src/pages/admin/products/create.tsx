import {Button, Checkbox, Form, Input, message, Select} from "antd";
import {useContext, useState} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {useRouter} from "next/router";
import {MinusCircleOutlined, PlusCircleOutlined, PlusOutlined} from "@ant-design/icons";

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
    const router = useRouter()
    const handleUpdateProduct = (id) => {
    }

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
            render: <Input.TextArea/>
        },
        {
            key: 2,
            label: "Activate ",
            name: "activate",
            render: <Checkbox
                // onChange={handleActivateUser}
                // defaultChecked={dataModal.activate}
            />
        },
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
        if (!attributes[0].attribute || !attributes[0].value) {
            return
        }
        let idx = 0;

        for (let i = 0; i < attributes[0].value.length; i++) {
            if (attributes[0].value[i] === '') {
                return message.error('Attribute name or value can\'t be empty');
            } else {
                tmp['attribute1_name'] = attributes[0].attribute
                tmp['attribute1_value'] = attributes[0].value[i]
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

            debugger
            for (let j = 0; j < attributes[1].value.length; j++) {
                if (attributes[1].value[j] !== '') {
                    tmp['attribute2_name'] = attributes[1].attribute
                    tmp['attribute2_value'] = attributes[1].value[j]
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

                for (let k = 0; k < attributes[2].value.length; k++) {
                    if (attributes[2].value[k] !== '') {
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
                    continue

                }

            }

        }
        console.log('dataaaa', data)
        form.setFieldsValue({variants: data})
    }


    const onFinish = (values) => {
        console.log(values)
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
                    attribute: 'size'

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
                                                name={[field.name, 'value']}
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

                <Form.List name="variants" >
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


            </Form>
        </>
    )
}
export default AdminCreateProduct;