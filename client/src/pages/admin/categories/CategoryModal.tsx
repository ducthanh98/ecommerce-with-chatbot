import {Button, Form, Input, Modal, Checkbox, notification, message, UploadProps} from 'antd'
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "./api";
import {useEffect, useState} from "react";
import {UploadFile} from "antd/es/upload/interface";
import {Upload} from "../../../components/shared/utils/Upload";

const styles = {
    textBold: {
        fontWeight: 'bold',
    }
}

interface Props {
    dataModal: any
    visible: boolean
    setShowModal: Function
    setLoading: Function
    refresh: Function
}

export const CategoryModal = (props: Props) => {
    const {dataModal, visible, setShowModal, setLoading, refresh} = props
    const [fileList, setFileList] = useState([] as UploadFile[]);

    const layout = {
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 18
        }
    };

    useEffect(() => {
        if (dataModal.image) {
            const fileList: UploadFile[] = [
                {
                    uid: dataModal.image,
                    url: `http://localhost:5000/images/${dataModal.image}`,
                    status: "done"
                }
            ]
            setFileList(fileList)
        }
    }, [])

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
            initialValue: dataModal.name ? dataModal.name : '',
            name: "name",
            rules: [
                {
                    required: true,
                    message: "category is required"
                }
            ],
            render: <Input/>
        },
        {
            key: 1,
            label: "Description ",
            name: "description",
            initialValue: dataModal.description ? dataModal.description : '',
            render: <Input.TextArea/>
        },
        {
            key: 2,
            label: "Activate ",
            name: "activate",
            valuePropName: "checked",
            initialValue: dataModal.activate !== undefined ? dataModal.activate : true,
            render: <Checkbox value={'true'}/>
        },
        {
            key: 3,
            label: "Image",
            render: <Upload fileList={fileList} setFileList={setFileList}/>
        },
        {
            key: 4,
            className: "btn-wrap",
            layout: tailLayout,
            render: renderBtnSubmit()
        }
    ];


    const onFinish = async (values) => {
        setLoading({type: SET_LOADING, payload: true} as Action)
        if (fileList.length < 1) {
            return message.error("Image is required")
        }

        values.image = fileList[0].response ? fileList[0].response.filenames[0] : fileList[0].uid

        const payload = {...dataModal, ...values}

        let result
        if (!payload.id) {
            result = await api.createCategory(payload)
        } else {
            result = await api.updateCategory(payload)
        }

        if (result.error) {
            setLoading({type: SET_LOADING, payload: false} as Action)

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }

        setLoading({type: SET_LOADING, payload: false} as Action)
        notification.success({
            message: 'Fashion and Clothing Shop',
            placement: 'topLeft',
            className: 'custom-notification-antd',
            description: "Successfully"
        });
        setShowModal(false)
        refresh()

    }

    return (
        <div>
            <Modal
                title={'Category'}
                visible={visible}
                onCancel={() => setShowModal(false)}
                footer=''
            >
                <Form {...layout} name="basic" onFinish={onFinish}>
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
                </Form>
            </Modal>
        </div>
    );
}