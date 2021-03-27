import {Permission, Role} from "../roles/model";
import {useState} from "react";
import {Button, Checkbox, Form, Input, Modal, notification} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "../roles/api";
import {User} from "./model";

interface Props {
    dataModal: User
    visible: boolean
    roles: Role[]
    setShowModal: Function
    setLoading: Function
    refresh: Function
}

export const UserModal = () => {
    const {dataModal, visible, setShowModal, roles, setLoading, refresh} = props
    const [activate, setActivate] = useState(dataModal.activate)
    let selectIds = []
    const layout = {
        labelCol: {
            span: 6
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

    const renderBtnSubmit = () => {
        return (
            <Button type="primary" htmlType="submit" className="login-btn">
                Submit
            </Button>
        );
    };

    const handleSelectRole = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            selectIds.push(e.target.value)
        } else {
            selectIds = selectIds.filter(x => x !== e.target.value)
        }
    }

    const renderCheckboxRoles = () => {
        return (
            <>
                {
                    roles.map(role => (
                        <>

                            <Checkbox
                                key={role.name}
                                defaultChecked={dataModal.user_roles?.some(x => x.role_id == role.id)}
                                value={role.id}
                                onChange={handleSelectRole}>
                                {role.name}
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
            key: 1,
            label: "Activate ",
            name: "activate",
            render:  <Checkbox value={'true'} onChange={handleActivateUser} defaultChecked={dataModal.activate}/>
        },
        {
            key: 3,
            label: "Roles ",
            name: "roles",
            render: renderCheckboxRoles()
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
        values.permissions = selectIds

        const payload = {...dataModal, ...values, delete_permissions: [], update_permissions: [], activate}

        for (let i = 0; i < values.permissions.length; i++) {
            if (!dataModal.role_permissions || !dataModal.role_permissions.includes(values.permissions[i])) {
                payload.update_permissions.push(values.permissions[i])
            }
        }

        for (let i = 0; i < dataModal.role_permissions?.length; i++) {
            if (!values.permissions || !values.permissions.includes(dataModal.role_permissions[i].permission_id)) {
                payload.delete_permissions.push(dataModal.role_permissions[i].permission_id)
            }
        }


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