import {useContext, useEffect, useState} from "react";
import {api} from './api'
import {useRouter} from "next/router";
import {Button, notification, Table} from "antd";
import {Action} from "../../../utils/models/reducer.model";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {StoreContext} from "../../../utils/store/Store";
import {getRouteQuery, handleUpdateRouteQuery} from "../../../core/utils/url";
import {FetchPermissionResponse, FetchRoleResponse, GetRoleResponse, Role} from "./model";
import {RoleModal} from "./RoleModal";
import {CodepenCircleFilled, PlusCircleFilled} from "@ant-design/icons";
import {UserModal} from "./UserModel";


const AdminUser = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [permissions, setPermissions] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({} as Role)
    const [filter, setFilter] = useState({} as any)
    const [visibleModal, setVisibleModal] = useState(false)
    const router = useRouter()

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <p className={'text-bold'}>{text}</p>,
        },
        {
            title: 'Email',
            dataIndex: 'name',
            key: 'name',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Activate',
            dataIndex: 'activate',
            key: 'activate',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            render: text => <p>{new Date(text).toLocaleDateString()}</p>,

        },
        {
            title: 'Actions',
            render: (text, {id}) =>
                <Button onClick={() => handleUpdateUser(id)}
                        type="primary"
                        shape="round"
                        icon={<CodepenCircleFilled/>}
                        size={'middle'}>
                    Edit
                </Button>

        },

    ];

    useEffect(() => {
        setFilter({...getRouteQuery(filter, router)})
        init()
    }, [])

    const init = async () => {
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        await Promise.all([
            fetchUsers(filter),
            fetchRoles()
        ])
        handleUpdateRouteQuery(router, filter)
        dispatchLoading({type: SET_LOADING, payload: false} as Action)
    }

    const fetchRoles = async () => {
        const result = await api.fetchRoles(filter)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as FetchRoleResponse
        setRoles(data.roles)
    }

    const fetchPermissions = async () => {
        const result = await api.fetchPermissions()

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }

        const {permissions} = result.data as FetchPermissionResponse
        setPermissions(permissions)

    }

    const handleUpdateUser = async (id) => {
        const result = await api.getRole(id)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }

        const data = result.data as GetRoleResponse
        setRole(data.role)
        setVisibleModal(true)
    }
    const handleCreateRole = async (id) => {

        setRole({} as Role)
        setVisibleModal(true)
    }

    return (
        <div>
            <p className={'title-page'}>Role Management</p>
            <Button onClick={handleCreateRole} style={{marginBottom: '20px', float: 'right'}}
                    type="primary"
                    shape="round"
                    icon={<PlusCircleFilled/>}
                    size={'middle'}>
                Create
            </Button>
            <Table
                rowKey="id"
                dataSource={users}
                columns={columns}
                pagination={false}/>
            {
                visibleModal && <UserModal
                    // visible={visibleModal}
                    //                        setShowModal={setVisibleModal}
                    //                        dataModal={user}
                    //                        permissions={permissions}
                    //                        setLoading={dispatchLoading}
                    //                        refresh={init}
                />
            }
        </div>
    );
}
export default AdminUser;