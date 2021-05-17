import {Button, Checkbox, Form, Input, InputNumber, message, notification, Select} from "antd";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../../utils/store/Store";
import {UploadFile} from "antd/es/upload/interface";
import {Upload} from "../../../../components/shared/admin/Upload";
import {SET_LOADING} from "../../../../utils/store/reducers/loading";
import {Action} from "../../../../utils/models/reducer.model";
import {api} from "../api";
import {useRouter} from "next/router";
import {FetchCategoriesResponse} from "../model";
import {GetProductResponse, Product} from "../../../products/model";

const {Option} = Select;

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
    const [categories, setCategories] = useState([])
    const [variants, setVariants] = useState([])
    const router = useRouter()
    const {id} = router.query
    const [product, setProduct] = useState({} as Product)
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

    useEffect(() => {
        fetchCategory()
        init()
    }, [])

    const init = async () => {
        const result = await api.getProduct(id)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const productResult = (result.data as GetProductResponse).product
        let images = productResult.images.map(x => ({
            uid: x,
            url: `http://localhost:5000/images/${x}`,
            status: "done"
        }))
        setFileList(images)
        setProduct(productResult)

        form.setFieldsValue({variants: productResult.product_variants})
    }

    const fetchCategory = async () => {
        const result = await api.fetchCategory()

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as FetchCategoriesResponse
        setCategories(data.categories)
    }

    const renderSelectCategory = () => {
        return (
            <Select
                showSearch
                style={{width: 200}}
                placeholder="Select a category"
                optionFilterProp="children"
                value={product.category?.id}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    categories.map(item => (<Option key={item.id} value={item.id}>{item.name}</Option>))
                }

            </Select>
        )
    }

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
            initialValue: product.name,
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
            initialValue: product.description,
            render: <Input.TextArea/>
        },
        {
            key: 7,
            label: "Category ",
            name: "category_id",
            initialValue: product.category?.id,
            rules: [
                {
                    required: true,
                    message: "Category is required"
                }
            ],
            render: renderSelectCategory()
        },
        {
            key: 2,
            label: "Activate ",
            name: "activate",
            valuePropName: "checked",
            initialValue: true,
            render: <Checkbox value={'true'}/>
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


    const onFinish = async (values) => {
        if (fileList.length < 1) {
            return message.error("Image is required")
        }
        dispatchLoading({type: SET_LOADING, payload: true} as Action)

        values.images = [fileList[0].response ? fileList[0].response.filenames[0] : fileList[0].uid]
        const result = await api.updateProduct(values, product.id)

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
            {product.id &&
            <Form {...layout} name="basic" onFinish={onFinish} form={form}>

                {formItems.map(item => (
                    <Form.Item
                        label={item.label}
                        name={item.name}
                        rules={item.rules}
                        key={item.key}
                        valuePropName={item.valuePropName}
                        className={item.className}
                        {...item.layout}
                        initialValue={item.initialValue}
                    >
                        {item.render}
                    </Form.Item>
                ))}

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
                                                name={[field.name, 'name']}
                                                style={styles.variantForm}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Missing variant name"
                                                    }
                                                ]}>
                                                <Input placeholder="Variant name"/>
                                            </Form.Item>
                                            <span
                                                style={{marginTop: '4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ &nbsp;&nbsp;&nbsp; </span>
                                            <Form.Item
                                                name={[field.name, 'price']}
                                                style={styles.variantForm}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Missing price"
                                                    }
                                                ]}>
                                                <InputNumber placeholder="Price"/>
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
            }
        </>
    )
}
export default AdminCreateProduct;