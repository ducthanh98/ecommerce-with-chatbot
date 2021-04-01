import {Button, Table} from "antd";
import {CodepenCircleFilled, PlusCircleFilled} from "@ant-design/icons";
import {RoleModal} from "../roles/RoleModal";
import {useContext} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {useRouter} from "next/router";

const AdminProduct = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading

    const router = useRouter()
    const handleUpdateProduct = (id) => {}

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

    return (
        <>
            <div>
                <p className={'title-page'}>Product Management</p>
                <Button style={{marginBottom: '20px', float: 'right'}}
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
            </div>
        </>
    )
}
export default AdminProduct;