import {Button, Form, Input, Modal, Checkbox, notification} from 'antd'
import {Permission, Role} from "./model";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {Action} from "../../../utils/models/reducer.model";
import {api} from "./api";

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

    const handleSelectPermission = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            selectIds.push(e.target.value)
        } else {
            selectIds = selectIds.filter(x => x !== e.target.value)
        }
    }

    const renderCheckboxPermissions = () => {
        return (
            <>
                {
                    permissions.map(permission => (
                        <>

                            <Checkbox value={permission.id} onChange={handleSelectPermission}>
                                {permission.code}
                            </Checkbox>
                            <br/>

                        </>
                    ))
                }

            </>
        )

    }

    const formItems = [
        {
            key: 0,
            label: "Name",
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
            initialValue: '',
            render: <Input.TextArea/>
        },
        {
            key: 2,
            label: "Permissions ",
            name: "permissions",
            render: renderCheckboxPermissions()
        },
        {
            key: "4",
            className: "btn-wrap",
            layout: tailLayout,
            render: renderBtnSubmit()
        }
    ];

    const onFinish = async (values) => {
        setLoading({type: SET_LOADING, payload: true} as Action)

        values.permissions = selectIds
        const result = await api.createRole(values)
        if (result.error) {

            notification.error({
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
            description: "Create role successfully"
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