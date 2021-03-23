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


const AdminRole = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [permissions, setPermissions] = useState([])
    const [roles, setRoles] = useState([])
    const [role, setRole] = useState({} as Role)
    const [filter, setFilter] = useState({} as any)
    const [visibleModal, setVisibleModal] = useState(true)
    const router = useRouter()

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <p className={'text-bold'}>{text}</p>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
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
                <Button onClick={() => handleUpdateRole(id)}
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
            fetchRoles(),
            fetchPermissions()
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

    const handleUpdateRole = async (id) => {
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
                dataSource={roles}
                columns={columns}
                pagination={false}/>
            {
                visibleModal && <RoleModal visible={visibleModal}
                                           setShowModal={setVisibleModal}
                                           dataModal={role}
                                           permissions={permissions}
                                           setLoading={dispatchLoading}
                                           refresh={init}
                />
            }
        </div>
    );
}
export default AdminRole;