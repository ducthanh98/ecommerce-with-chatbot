import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {useRouter} from "next/router";
import {Button, Input, notification, Table, Tag} from "antd";
import {
    CheckCircleOutlined,
    CodepenCircleFilled,
    CodeSandboxOutlined,
    DeleteOutlined,
    PlusCircleFilled,
    ShoppingCartOutlined
} from "@ant-design/icons";
import {getRouteQuery, handleUpdateRouteQuery} from "../../../core/utils/url";
import {api} from "./api";
import {OrderItemModal} from "./OrderItemModal";

const {Search} = Input;

const AdminOrder = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [filter, setFilter] = useState({} as any)
    const [orders, setOrders] = useState([])
    const [orderItems, setOrderItems] = useState([])
    const [count, setCount] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)
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

    const handleUpdateStatus = async (order_id, status) => {
        const payload = {status}
        const result = await api.updateOrder(order_id, payload)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        init()
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => <p
                style={{cursor: "pointer", color: '#007bff'}}
                className={'text-bold'}
                onClick={() => handleShowOrderDetail(record)}>{text}</p>,
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
            title: 'Total Pirce',
            render: (text, record) =>
                <p>$ {record.order_items.reduce((accumulator, currentValue) => (accumulator + (currentValue.quantity * currentValue.price)), 0)}</p>,
        },
        {
            title: 'Actions',
            render: (text, {id, status}) =>
                <>
                    {
                        status == 1 && <Button
                            onClick={() => handleUpdateStatus(id, 2)}
                            type="primary"
                            shape="round"
                            icon={<CodeSandboxOutlined />}
                            size={'middle'}>
                            Packing
                        </Button>
                    }
                    {
                        status == 2 && <Button
                            onClick={() => handleUpdateStatus(id, 3)}
                            type="primary"
                            shape="round"
                            icon={<ShoppingCartOutlined />}
                            size={'middle'}>
                            Shipping
                        </Button>
                    }
                    {
                        status == 3 && <Button
                            onClick={() => handleUpdateStatus(id, 4)}
                            type="primary"
                            shape="round"
                            icon={<CheckCircleOutlined />}
                            size={'middle'}>
                            Done
                        </Button>
                    }
                    {
                        status < 3 && status != 5 && <Button
                            onClick={() => handleUpdateStatus(id, 5)}
                            type="primary"
                            shape="round"
                            danger={true}
                            icon={<DeleteOutlined />}
                            size={'middle'}>
                            Cancel
                        </Button>
                    }


                </>
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

    const handleShowOrderDetail = (item) => {
        setOrderItems(item.order_items)
        setVisibleModal(true)
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

                {
                    visibleModal &&
                    <OrderItemModal
                        visible={visibleModal}
                        setShowModal={setVisibleModal}
                        dataModal={orderItems}
                    />
                }
            </div>
        </>
    )
}
export default AdminOrder;