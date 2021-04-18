import {Button, Form, Input, Modal, Checkbox, notification} from 'antd'
import {Permission, Role} from "./model";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "./api";
import {useEffect, useState} from "react";

const styles = {
    textBold: {
        fontWeight: 'bold',
    }
}

interface Props {
    dataModal: Role
    visible: boolean
    permissions: Permission[]
    setShowModal: Function
    setLoading: Function
    refresh: Function
}

export const RoleModal = (props: Props) => {
    const {dataModal, visible, setShowModal, permissions, setLoading, refresh} = props
    const [activate, setActivate] = useState(dataModal.activate)
    const [selectIds, setSelectIds] = useState([])

    const layout = {
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 18
        }
    };

    useEffect(() => {
        const data = []
        dataModal.role_permissions?.forEach(item => data.push(item.permission_id))
        setSelectIds(data)
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

    const handleSelectPermission = (e: CheckboxChangeEvent) => {
        let data = [...selectIds]
        if (e.target.checked) {
            data.push(e.target.value)
        } else {
            data = data.filter(x => x !== e.target.value)
        }
        setSelectIds(data)
    }

    const renderCheckboxPermissions = () => {
        return (
            <>
                {
                    permissions.map(permission => (
                        <>

                            <Checkbox
                                key={permission.code}
                                defaultChecked={dataModal.role_permissions?.some(x => x.permission_id == permission.id)}
                                value={permission.id}
                                onChange={handleSelectPermission}>
                                {permission.code}
                            </Checkbox>
                            <br/>

                        </>
                    ))
                }

            </>
        )

    }
    const handleActivateUser = (e: CheckboxChangeEvent) => {
        setActivate(e.target.checked)
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
                    message: "role name is required"
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
            render: <Checkbox value={'true'} onChange={handleActivateUser} defaultChecked={dataModal.activate}/>
        },
        {
            key: 3,
            label: "Permissions ",
            name: "permissions",
            render: renderCheckboxPermissions()
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
        values.update_permissions = selectIds

        const payload = {...dataModal, ...values, activate}
        let result
        if (!payload.id) {
            result = await api.createRole(payload)
        } else {
            result = await api.updateRole(payload)
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
                title={'Role'}
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