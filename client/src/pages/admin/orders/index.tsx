import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {useRouter} from "next/router";
import {Button, Input, notification, Table, Tag} from "antd";
import {CodepenCircleFilled, PlusCircleFilled} from "@ant-design/icons";
import {getRouteQuery, handleUpdateRouteQuery} from "../../../core/utils/url";
import {api} from "./api";
const {Search} = Input;

const AdminOrder = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [filter, setFilter] = useState({} as any)
    const [orders, setOrders] = useState([])
    const [count, setCount] = useState(0)
    const router = useRouter()
    const handleUpdateProduct = (id) => {
    }

    const mapOrderStatus = (key) => {
        const orderStatus = {
            1: {
                value: 'Pending',
                color: ''
            },
            2: {
                value: 'Packing',
                color: 'gold'
            },
            3: {
                value: 'Shipping',
                color: 'geekblue'
            },
            4: {
                value: 'Done',
                color: 'green'
            },
            5: {
                value: 'Cancel',
                color: 'red'
            }
        }

        return orderStatus[key]
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <p className={'text-bold'}>{text}</p>,
        },
        {
            title: 'Customer Name',
            dataIndex: 'fullname',
            key: 'fullname',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: text => <Tag color={mapOrderStatus(text).color}>{mapOrderStatus(text).value}</Tag>,
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
                <Button
                    // onClick={() => handleUpdateProduct(id)}
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
        if (Object.keys(filter).length < 1) return
        init()
    }, [])

    useEffect(() => {
        setFilter(getRouteQuery(filter, router))
        if (Object.keys(filter).length < 1) return
        init()
    }, [filter.limit, filter.page])

    const init = async () => {
        handleUpdateRouteQuery(router, filter)
        await fetchOrders()
    }

    const fetchOrders = async () => {
        const result = await api.fetchOrders(filter)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as any
        setOrders(data.orders)
        setCount(data.count)
    }

    const handleCreateProduct = () => {
        router.push('products/create')
    }

    const updateFilter = (value) => {
        const tmp = {...filter, ...value}
        setFilter(tmp)
    }
    return (
        <>
            <div>
                <p className={'title-page'}>Order Management</p>
                <Search placeholder="Search ..." onChange={(e) => updateFilter({id: e.target.value})}
                        value={filter.name}
                        className={'custom-search'}
                        onSearch={init} enterButton/>
                <Table
                    rowKey="id"
                    dataSource={orders}
                    columns={columns}
                    pagination={false}/>
            </div>
        </>
    )
}
export default AdminOrder;