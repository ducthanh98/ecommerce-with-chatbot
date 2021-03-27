import {useContext, useEffect, useState} from "react";
import {api} from './api'
import {useRouter} from "next/router";
import {Button, notification, Table} from "antd";
import {Action} from "../../../utils/models/reducer.model";
import {SET_LOADING} from "../../../utils/store/reducers/loading";
import {StoreContext} from "../../../utils/store/Store";
import {Role} from "./model";
import {CategoryModal} from "./CategoryModal";
import {CodepenCircleFilled, PlusCircleFilled} from "@ant-design/icons";


const AdminRole = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({} as Role)
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
        init()
    }, [])

    const init = async () => {
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        const result = await api.fetchCategories()

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as any
        setCategories(data.categories)
        dispatchLoading({type: SET_LOADING, payload: false} as Action)
    }

    //
    //
    // const handleUpdateRole = async (id) => {
    //     const result = await api.getRole(id)
    //
    //     if (result.error) {
    //
    //         return notification.error({
    //             message: 'Fashion and Clothing Shop',
    //             placement: 'topLeft',
    //             className: 'custom-notification-antd',
    //             description: result.data
    //         });
    //
    //     }
    //
    //     const data = result.data as GetRoleResponse
    //     setRole(data.role)
    //     setVisibleModal(true)
    // }
    const handleCreateCategory = async (id) => {

        setVisibleModal(true)
    }

    return (
        <div>
            <p className={'title-page'}>Category Management</p>
            <Button onClick={handleCreateCategory} style={{marginBottom: '20px', float: 'right'}}
                    type="primary"
                    shape="round"
                    icon={<PlusCircleFilled/>}
                    size={'middle'}>
                Create
            </Button>
            <Table
                rowKey="id"
                dataSource={categories}
                columns={columns}
                pagination={false}/>
            {
                visibleModal && <CategoryModal visible={visibleModal}
                                               setShowModal={setVisibleModal}
                                               dataModal={category}
                                               setLoading={dispatchLoading}
                                               refresh={init}
                />
            }
        </div>
    );
}
export default AdminRole;