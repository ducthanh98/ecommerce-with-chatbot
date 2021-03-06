import {useContext, useEffect, useState} from "react";
import {api} from './api'
import {useRouter} from "next/router";
import {Button, notification, Table, Tag} from "antd";
import {Action} from "../../../utils/models/reducer.model";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {StoreContext} from "../../../utils/store/Store";
import {getRouteQuery, handleUpdateRouteQuery} from "../../../core/utils/url";
import {FetchRoleResponse, FetchUserResponse, GetRoleResponse, GetUserResponse, Role, User} from "./model";
import {UserModal} from "./UserModal";
import {CodepenCircleFilled, PlusCircleFilled} from "@ant-design/icons";


const AdminUser = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [roles, setRoles] = useState([])
    const [users, setUsers] = useState([] as User[])
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({} as User)
    const [filter, setFilter] = useState({})
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
            dataIndex: 'email',
            key: 'email',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Status',
            dataIndex: 'activate',
            key: 'activate',
            render: text => <p>{text ? <Tag color="geekblue">Activate</Tag> : <Tag color="red">Deactivate</Tag>}</p>,
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
        setFilter(getRouteQuery(filter, router))
    }, [])

    useEffect(() => {
        if (Object.keys(filter).length < 1) return
        init()
    }, [filter])

    const init = async () => {
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        handleUpdateRouteQuery(router, filter)
        await Promise.all([
            fetchUsers(),
            fetchRoles()
        ])
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

    const fetchUsers = async () => {
        const result = await api.fetchUsers(filter)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as FetchUserResponse
        setUsers(data.users)
        setCount(data.count)
    }

    const handleUpdateUser = async (id) => {
        const result = await api.getUser(id)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }

        const data = result.data as GetUserResponse
        setUser(data.user)
        setVisibleModal(true)
    }


    return (
        <div>
            <p className={'title-page'}>User Management</p>
            <Table
                rowKey="id"
                dataSource={users}
                columns={columns}
                pagination={true}/>
            {
                visibleModal &&
                <UserModal
                    visible={visibleModal}
                    setShowModal={setVisibleModal}
                    dataModal={user}
                    roles={roles}
                    setLoading={dispatchLoading}
                    refresh={init}
                />
            }
        </div>
    );
}
export default AdminUser;