import {Button, Form, Input, Modal, Checkbox, notification, Upload, message, UploadProps} from 'antd'
import {Permission, Role} from "./model";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "./api";
import {useEffect, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {UploadFile} from "antd/es/upload/interface";

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

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    const getBase64 = (file): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    }

    // const handleCancel = () => setState({previewVisible: false});


    const uploadProps: UploadProps<any> = {
        name: 'file',
        action: 'http://localhost:5000/v1/api/upload-api',
        withCredentials: true,
        listType: "picture-card",
        fileList: fileList,
        onChange({file, fileList, event}) {
            console.log(file)
            setFileList(fileList)
        },
        async onPreview(file) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
        }

    };

    const renderUploadImage = () => {

        return (
            <Upload
                {...uploadProps}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
        )
    }


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
            render: renderUploadImage()
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