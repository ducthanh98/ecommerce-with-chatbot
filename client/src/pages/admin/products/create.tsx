import {Button, Checkbox, Form, Input, Select} from "antd";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {useRouter} from "next/router";
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";

const AdminCreateProduct = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading

    const router = useRouter()
    const handleUpdateProduct = (id) => {
    }

    const layout = {
        labelCol: {
            span: 2
        },
        wrapperCol: {
            span: 18
        }
    };


    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16
        }
    };

    const createOptionForm = () => {
        const key = optionForms.length + 1
        return {
            key,
            wrapperCol: {
                span: 24
            },
            render: <Input.Group compact>
                <Form.Item
                    name={'option'}
                    style={{width: '30%', marginRight: '2%'}}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'values'}
                    style={{width: '50%'}}
                >
                    <Select mode={"tags"} open={false} style={{width: '100%'}}></Select>
                </Form.Item>
            </Input.Group>,
        }
    }
    const [optionForms, setOptionForms] = useState([])

    useEffect(() => {
        setOptionForms([createOptionForm()])
    }, [])


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
        // {
        //     key: 4,
        //     className: "btn-wrap",
        //     layout: tailLayout,
        //     render: renderBtnSubmit()
        // }
    ];

    const onFinish = () => {
    }

    return (
        <>
            <Form {...layout} name="basic" onFinish={onFinish}>
                {formItems.map(item => (
                    <Form.Item
                        {...item}
                    >
                        {item.render}
                    </Form.Item>
                ))}

                <div className="ant-col ant-col-2 ant-form-item-label"><label htmlFor="basic_activate" className=""
                                                                              title="Activate ">Attributes</label>
                </div>


                {optionForms.map(item => (
                    <Form.Item
                        {...item}
                    >
                        {item.render}
                    </Form.Item>
                ))}
            </Form>
        </>
    )
}
export default AdminCreateProduct;