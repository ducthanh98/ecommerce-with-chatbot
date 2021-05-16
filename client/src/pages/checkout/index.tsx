import {useContext, useEffect, useState} from "react";
import {api} from './api'
import {useRouter} from "next/router";
import {StoreContext} from "../../utils/store/Store";
import {initEvent} from "../../utils/script/main";
import {SET_CART} from "../../utils/store/reducers/cart";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {notification} from "antd";


const Checkout = () => {
    const {loading, cart} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [cartState, dispatchCart] = cart
    const [permissions, setPermissions] = useState([])
    const router = useRouter()
    const [customerInfo, setCustomerInfo] = useState({} as any)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        $("body").addClass("cart-tab-page common-typography")
        initEvent();

        return () => {
            $("body").removeClass("cart-tab-page common-typography")
        }
    }, [])

    const handleChangeCustomerForm = (key, value) => {
        customerInfo[key] = value
        setCustomerInfo({...customerInfo})
    }

    const handleRemoveCartItem = (id) => {
        let cart = [...cartState.cart]
        cart = cart.filter(item => item.id != id)
        dispatchCart({type: SET_CART, payload: {cart: cart}})
    }

    const handleIncreaseQuantity = (item, isIncrease = true) => {
        if (isIncrease) {
            item.quantity++;
        } else if (!isIncrease && item.quantity > 1) {
            item.quantity--;
        }
        dispatchCart({type: SET_CART, payload: {cart: [...cartState.cart]}})
    }

    const handleCheckout = async () => {
        if (!customerInfo.fullname || !customerInfo.phone || !customerInfo.address) {
            $(".tab-second").trigger("click")
            $("html").animate({
                "scrollTop": "700"
            }, 2000);
            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: "Customer information is required"
            });
        }
        const payload = {
            ...customerInfo,
            order_items: cartState.cart
        }
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        const result = await api.createOrder(payload)
        if (result.error) {
            dispatchLoading({type: SET_LOADING, payload: false} as Action)
            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        dispatchLoading({type: SET_LOADING, payload: false} as Action)

        setShowResult(true)
        $(".tab-four").trigger("click")
        $("html").animate({
            "scrollTop": "0"
        }, 2000);
        setTimeout(() => {
            router.push("/products")
            dispatchCart({type: SET_CART, payload: {cart: []}})
        }, 3500)
    }

    return (
        <div>
            <header className="container">
                <div className="row">
                    <div className="col-lg-12 mt-70 mb-40">
                        <div className="tab-accordion cart-tab">
                            <div className="tab">
                                <ul className="d-flex justify-content-between">
                                    <li className="tab-one active"><h4>Cart</h4></li>
                                    <li className="tab-second"><h4>Shipping</h4></li>
                                    <li className="tab-four"><h4>Summary</h4></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <div className="tab-content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content">
                                <div className="tab-one-content lost active current">
                                    <div className="cart-section">
                                        <div className="cart-title">
                                            <h2>Cart</h2>
                                        </div>
                                        <div className="qty-price text-center mb-4">
                                            <ul>
                                                <li className="right-margin"><h4>Qty</h4></li>
                                                <li><h4>Price</h4></li>
                                            </ul>
                                        </div>
                                        <div className="cart-box">
                                            {
                                                cartState.cart.map(item => (
                                                    <div className="single-cart d-flex justify-content-between mb-5" key={item.product_variant_id}>
                                                        <div className="cart-left d-flex">
                                                            <div className="cart-image image1"
                                                                 style={{backgroundImage: `url("http://localhost:5000/images/${item.image}")`}}>
                                                            </div>
                                                            <div className="cart-text">
                                                                <p>&nbsp;</p>
                                                                <h4>{item.name}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="cart-center align-self-center">
                                                            <div className="cart-quantity">
                                                                <ul>
                                                                    <li><span><i
                                                                        onClick={() => handleIncreaseQuantity(item, false)}
                                                                        className="ti-minus"/></span></li>
                                                                    <li><span>{item.quantity}</span></li>
                                                                    <li><span><i
                                                                        onClick={() => handleIncreaseQuantity(item)}
                                                                        className="ti-plus"/></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="cart-right d-flex align-self-center">
                                                            <div className="cart-price">
                                                                <h4>$ {item.price * item.quantity}</h4>
                                                            </div>
                                                            <div className="cart-icon mr-120"
                                                                 onClick={() => handleRemoveCartItem(item.id)}
                                                            >
                                                                <img src="/img/cart-tab-page/icon-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                    {/* Also Like End */}
                                </div>
                                <div className="tab-second-content lost">
                                    {/* Shipping Section Starts */}
                                    <div className="shipping-section">
                                        <div className="shipping-title">
                                            <h2>Shipping</h2>
                                        </div>
                                        <div className="shipping-box cart-box mt-70">
                                            <div className="address-section delivery-section d-md-flex">
                                                <div className="address-left">
                                                    <h4>Address</h4>
                                                </div>
                                                <div className="address-right">
                                                    <form action="#" className="mt-70">
                                                        <div className="common-input2 mb-5">
                                                            <h6>Full Name *</h6>
                                                            <input value={customerInfo.fullname}
                                                                   onChange={e => handleChangeCustomerForm("fullname", e.target.value)}
                                                                   type="text" placeholder="e.i Annastasia Alatore"/>
                                                        </div>
                                                        <div className="common-input2 mb-5">
                                                            <h6>Address *</h6>
                                                            <input value={customerInfo.address}
                                                                   onChange={e => handleChangeCustomerForm("address", e.target.value)}
                                                                   type="text" placeholder="e.i Annastasia Alatore"/>
                                                        </div>
                                                        <div className="common-input2 mb-5">
                                                            <h6>Phone Number *</h6>
                                                            <input value={customerInfo.phone} type="text"
                                                                   onChange={e => handleChangeCustomerForm("phone", e.target.value)}
                                                                   placeholder="e.i +230 544 65768*"/>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Shipping Section End */}
                                </div>
                                <div className="tab-four-content lost">
                                    <div className="summary-section">
                                        {
                                            showResult &&
                                            <div className="summary-header text-center">
                                                <img src="assets/img/cart-tab-page/thanks.png" className="mb-3" alt=""/>
                                                <h3>Thank You, {customerInfo.fullname} !</h3>
                                                <p className="mt-4">Huraaay! You order has been placed
                                                    successfully. <br/>We
                                                    received your request and wrapping up your stuff for shipping</p>
                                            </div>
                                        }
                                        <div className="summary-box cart-box mt-100">
                                            <div className="summary-content">
                                                <div className="order-part">
                                                    {
                                                        cartState.cart.map(item => (
                                                            <div className="row" key={item.product_variant_id}>
                                                                <div className="col-lg-4">
                                                                    <div className="common-left">
                                                                        <h4>Order Details</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-8">
                                                                    <div
                                                                        className="common-right pt-80 d-flex justify-content-between mb-70">
                                                                        <div className="slub-shirt">
                                                                            <h5>{item.name}</h5>
                                                                            <ul className="mt-4">
                                                                                <li># {item.product_variant_id}</li>
                                                                                <li>Qty: {item.quantity} Item</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="price">
                                                                            <h5>$ {item.price * item.quantity}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="information-part mt-70">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="common-left">
                                                                <h4>Customer Information</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div
                                                                className="common-right pt-80 d-flex justify-content-between mb-70">
                                                                <div className="address">
                                                                    <h5>Shipping Address</h5>
                                                                    <ul className="mt-4">
                                                                        <li>{customerInfo.fullname}</li>
                                                                        <li>{customerInfo.address}</li>
                                                                        <li>{customerInfo.phone}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-8 offset-lg-4">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="estimation-section-main section-padding-top4">
                <div className="container">
                    <div className="row estimation-section">
                        <div className="col-lg-6">
                            <div className="estimation-left">
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="estimation-right text-right">
                                <div className="right-title">
                                    <h4>Total</h4>
                                    <h3>$ {cartState.cart.reduce((accumulator, currentValue) => (accumulator + (currentValue.quantity * currentValue.price)), 0)}</h3>
                                    <span className="template-btn2 off1"
                                          onClick={handleCheckout}>Checkout <span>⇀</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Checkout;