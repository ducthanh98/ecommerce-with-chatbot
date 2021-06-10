import {useContext, useEffect, useState} from "react";
import {initEvent} from "../../utils/script/main";
import {notification} from "antd";
import {api} from "./api";
import {StoreContext} from "../../utils/store/Store";


const Users = ()=>{
    const {user} = useContext(StoreContext)
    const [userState, dispatchUser] = user
    const [orders, setOrders] = useState([])

    const [info,setInfo] = useState({password:"",confirm_password:""})
    useEffect(() => {
        fetchOrders()
        $("body").addClass("profile-page common-typography")
        initEvent();

        return () => {
            $("body").removeClass("profile-page common-typography")
        }
    }, [])

    const handleChangePassword = (key, value) => {
        info[key] = value
        setInfo({...info})
    }

    const fetchOrders = async ()=>{
        const {id} = userState?.user_info?.user_info
        const result = await api.fetchOrders({user_id:id})

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

    const onSubmitPassword = async (e:any)=>{
        e.preventDefault()
        if(info.password !== info.confirm_password){
            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: "Password and confirm password are not matched"
            });
        }
        const result = await api.updatePassword(info)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        info.password = ""
        info.confirm_password = ""
        setInfo({...info})

        notification.success({
            message: 'Fashion and Clothing Shop',
            placement: 'topLeft',
            className: 'custom-notification-antd',
            description: "Change password successfully"
        });

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
        fetchOrders()
    }


    return (
        <section className="profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="profile-title">
                            <h2>My Account</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 pr-0">
                        <div className="profile-tab">
                            <div className="tab-accordion">
                                <div className="tab">
                                    <ul>
                                        <li className="tab-one active"><h6><i className="fa fa-user-o" /> profile</h6></li>
                                        <li className="tab-three"><h6><i className="fa fa-square-o" /> Track Order</h6></li>
                                        <li className="tab-five"><h6><i className="fa fa-sign-out" /> Log Out</h6></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 pl-0">
                        <div className="tab-content">
                            <div className="tab-one-content lost active">
                                <div className="contact-bg">
                                    <div className="form-border">
                                        <div className="form-title">
                                            <h4>Password</h4>
                                        </div>
                                        <form action="#" onSubmit={onSubmitPassword}>
                                            <h6>Password</h6>
                                            <input value={info.password} onChange={e => handleChangePassword("password",e.target.value)} type="password" placeholder="e.i **********" />
                                            <h6>Confirm Password</h6>
                                            <input type="password" value={info.confirm_password} onChange={e => handleChangePassword("confirm_password",e.target.value)} placeholder="e.i **********" />
                                            <div className="form-button">
                                                <button type="button" className="template-btn2 on2">Back<span className="custom-icon" /></button>
                                                <button type="submit" className="template-btn2 on1" >Save Changes<span className="custom-icon" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-three-content lost">
                                <div className="contact-bg3">
                                    <div className="form-border">
                                        <div className="form-title">
                                            <h4>Orders</h4>
                                        </div>
                                        <div className="content-bottom  content-padding">
                                                <div className="single-cart d-flex justify-content-between mb-5" >
                                                    <div className="cart-left d-flex" style={{minWidth:"50px",maxWidth:"50px"}}>
                                                        <div className="cart-text">
                                                            <h4>ID</h4>
                                                        </div>
                                                    </div>

                                                   <div className="cart-text" style={{minWidth:"300px",maxWidth:"300px"}}>
                                                        <div className="cart-price">
                                                            <h4>
                                                                Items
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="cart-text" style={{minWidth:"100px",maxWidth:"100px"}}>
                                                        <div className="cart-price">
                                                            <h4>
                                                                Price
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="cart-text"  style={{minWidth:"100px",maxWidth:"100px"}}>
                                                        <div className="cart-price">
                                                            <h4>
                                                                Status
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="cart-text">
                                                        <div className="cart-price">
                                                            <h4>
                                                                Actions
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            {orders.map(order => (
                                                <div className="single-cart d-flex justify-content-between mb-5" >
                                                    <div className="cart-left d-flex"  style={{minWidth:"50px",maxWidth:"50px"}}>
                                                        <div className="cart-text">
                                                            <h4>{order.id}</h4>
                                                        </div>
                                                    </div>

                                                    <div className="cart-text"  style={{minWidth:"300px",maxWidth:"300px"}}>
                                                        <div className="cart-price">
                                                            {order.order_items.map(item => (
                                                                <h4>{item.product_variant.name} * {item.quantity}</h4>
                                                            ))}
                                                        </div>


                                                    </div>
                                                    <div className="cart-text"  style={{minWidth:"100px",maxWidth:"100px"}}>
                                                        <div className="cart-price">
                                                            <h4>
                                                                {order.order_items.reduce((accumulator, currentValue) => (accumulator + (currentValue.quantity * currentValue.price)), 0)}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="cart-text"  style={{minWidth:"100px",maxWidth:"100px"}}>
                                                        <div className="cart-price">
                                                            <h4>
                                                                {mapOrderStatus(order.status).value}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    <div className="cart-text">
                                                        <div className="cart-price">
                                                            {
                                                                order.status == 1 && <h4>
                                                                <div className="cart-icon"
                                                                     style={{width:"27px",marginLeft:"10px"}}
                                                                 onClick={() => handleUpdateStatus(order.id,5)}
                                                            >
                                                                <img src="/img/cart-tab-page/icon-1.png" alt=""/>
                                                            </div>
                                                            </h4>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-four-content lost">
                                <div className="contact-bg4">
                                    <div className="form-border">
                                        <div className="form-title">
                                            <h4>Setting</h4>
                                        </div>
                                        <ul>
                                            <li><a href="profile-contact-details.html" target="_blank"><i className="fa fa-pencil-square-o" /> Contact Details</a></li>
                                            <li><a href="profile-social-accounts.html" target="_blank"><i className="fa fa-user-o" /> Social accounts</a></li>
                                            <li><a href="#"><i className="fa fa-lock" /> Change Password</a></li>
                                            <li><a href="profile-notifications.html" target="_blank"><i className="fa fa-bell-o" /> Notification</a></li>
                                            <li><a href="#"><i className="fa fa-exclamation-circle" /> Need Help?</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Users;