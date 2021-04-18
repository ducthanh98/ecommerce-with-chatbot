import {Role} from "../roles/model";
import {useEffect, useState} from "react";
import {Button, Checkbox, Form, Input, Modal, notification} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "./api";
import {User} from "./model";

interface Props {
    dataModal: User
    visible: boolean
    roles: Role[]
    setShowModal: Function
    setLoading: Function
    refresh: Function
}

export const UserModal = (props: Props) => {
    const {dataModal, visible, setShowModal, roles, setLoading, refresh} = props
    const [activate, setActivate] = useState(dataModal.activate)
    const [selectIds, setSelectIds] = useState([])

    useEffect(() => {
        const data = []
        dataModal.user_roles?.forEach(item => data.push(item.role_id))
        setSelectIds(data)
    }, [])

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
        let data = [...selectIds]
        if (e.target.checked) {
            data.push(e.target.value)
        } else {
            data = data.filter(x => x !== e.target.value)
        }
        setSelectIds(data)
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
            key: 0,
            label: "Email",
            name: "email",
            initialValue: dataModal.email,
            render: <Input disabled={true}/>
        },
        {
            key: 1,
            label: "Activate ",
            name: "activate",
            render: <Checkbox value={'true'} onChange={handleActivateUser} defaultChecked={dataModal.activate}/>
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
        debugger
        setLoading({type: SET_LOADING, payload: true} as Action)
        values.update_roles = selectIds

        const payload = {...dataModal, ...values, activate}
        const result = await api.updateUser(payload)

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
                title={'User'}
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