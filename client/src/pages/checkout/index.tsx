import {useContext, useEffect, useState} from "react";
import {api} from './api'
import {useRouter} from "next/router";
import {StoreContext} from "../../utils/store/Store";
import {getRouteQuery} from "../../core/utils/url";
import {initEvent} from "../../utils/script/main";


const Checkout = () => {
    const {loading, cart} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [cartState, dispatchCart] = cart
    const [permissions, setPermissions] = useState([])
    const router = useRouter()

    useEffect(() => {
        $("body").addClass("cart-tab-page common-typography")
        initEvent();

        return () => {
            $("body").removeClass("cart-tab-page common-typography")
        }
    }, [])

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
                        <div className="tab-accordion-text text-center mt-70">
                            <p>The next shipping for<span> 3 Hours 32 Mins</span></p>
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
                                                    <div className="single-cart d-flex justify-content-between mb-5">
                                                        <div className="cart-left d-flex">
                                                            <div className="cart-image image1" style={{backgroundImage: `url("http://localhost:5000/images/${item.image}")`}}>
                                                            </div>
                                                            <div className="cart-text">
                                                                <p>&nbsp;</p>
                                                                <h4>{item.name}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="cart-center align-self-center">
                                                            <div className="cart-quantity">
                                                                <ul>
                                                                    <li><span><i className="ti-minus"/></span></li>
                                                                    <li><span>{item.quantity}</span></li>
                                                                    <li><span><i className="ti-plus"/></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="cart-right d-flex align-self-center">
                                                            <div className="cart-price">
                                                                <h4>$ {item.price}</h4>
                                                            </div>
                                                            <div className="cart-icon mr-120">
                                                                <img src="assets/img/cart-tab-page/icon-1.png" alt=""/>
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
                                                            <h6>Full Name*</h6>
                                                            <input type="text" placeholder="e.i Annastasia Alatore"/>
                                                        </div>
                                                        <div className="common-input2 mb-5">
                                                            <h6>Zip / Postal Code*</h6>
                                                            <input type="text" placeholder="e.i EC1A 1AA"/>
                                                        </div>
                                                        <div className="diffrent-input d-md-flex mb-5">
                                                            <div className="common-input2">
                                                                <h6>House Number*</h6>
                                                                <input type="text" className="input-small"
                                                                       placeholder="e.i 221B"/>
                                                            </div>
                                                            <div className="common-input2">
                                                                <h6>Street*</h6>
                                                                <input type="text" className="input-large"
                                                                       placeholder="e.i Dorset"/>
                                                            </div>
                                                            <div className="common-input2 input-small2">
                                                                <h6>Appartment*</h6>
                                                                <input type="text" className="input-small"
                                                                       placeholder="e.i 14"/>
                                                            </div>
                                                        </div>
                                                        <div className="common-input2 mb-5">
                                                            <h6>Town / City*</h6>
                                                            <input type="text" placeholder="e.i London"/>
                                                        </div>
                                                        <div className="common-input2 mb-5">
                                                            <h6>Country*</h6>
                                                            <input type="text" placeholder="e.i UK"/>
                                                        </div>
                                                        <div className="common-input2 mb-5">
                                                            <h6>Phone Number*</h6>
                                                            <input type="text" placeholder="e.i +230 544 65768*"/>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Shipping Section End */}
                                </div>
                                <div className="tab-three-content lost">
                                    {/* Payment Section Starts */}
                                    <div className="payment-section">
                                        <div className="payment-title">
                                            <h2>Payment</h2>
                                        </div>
                                        <div className="payment-box cart-box mt-70">
                                            <div className="payment-content">
                                                <div className="prompt-section d-md-flex mb-100">
                                                    <div className="payment-left">
                                                        <h4>Prompt Payment</h4>
                                                    </div>
                                                    <div className="payment-right">
                                                        <div className="right-top d-flex">
                                                            <span><i className="fa fa-dot-circle-o"/></span>
                                                            <h6>Pay using your PayPal account. You will be redirected to
                                                                the <br/>System respectively to complete the payment.
                                                            </h6>
                                                        </div>
                                                        <div className="right-image mt-5 ml-100">
                                                            <img src="assets/img/cart-tab-page/payment/paypal.png"
                                                                 alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="credit-section d-md-flex">
                                                    <div className="payment-left">
                                                        <h4>Credit / Debit Card Payment</h4>
                                                    </div>
                                                    <div className="payment-right">
                                                        <div className="d-flex">
                                                            <div className="right-circle">
                                                                <span><i className="fa fa-circle-o"/></span>
                                                            </div>
                                                            <div className="right-image">
                                                                <img
                                                                    src="assets/img/cart-tab-page/payment/master-card.png"
                                                                    className="mr-5" alt=""/>
                                                                <img src="assets/img/cart-tab-page/payment/visa.png"
                                                                     alt=""/>
                                                            </div>
                                                        </div>
                                                        <form action="#" className="mt-70">
                                                            <div className="common-input2 mb-5">
                                                                <h6 className="mt-5 mt-lg-0">Name On Card</h6>
                                                                <input type="text"
                                                                       placeholder="e.i Annastasia Alatore"/>
                                                            </div>
                                                            <div className="common-input2 mb-5">
                                                                <h6>Card Number</h6>
                                                                <input type="text" placeholder="e.i"/>
                                                            </div>
                                                            <div className="diffrent-input d-flex mb-5">
                                                                <div className="common-input2">
                                                                    <h6>Expiry Date</h6>
                                                                    <input type="text" className="input-small"
                                                                           placeholder="e.i 221B"/>
                                                                </div>
                                                                <div className="common-input2">
                                                                    <h6>Security Code</h6>
                                                                    <input type="text" className="input-large"
                                                                           placeholder="e.i Dorset"/>
                                                                </div>
                                                            </div>
                                                            <div className="common-input2 mb-5">
                                                                <h6>Zip / Postal Code</h6>
                                                                <input type="text" placeholder="e.i EC1A 1AA"/>
                                                            </div>
                                                            <h6>By clicking Pay Now Securely you agree to our <a
                                                                href="#">Terms and Conditions.</a></h6>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Payment Section End */}
                                </div>
                                <div className="tab-four-content lost">
                                    <div className="summary-section">
                                        <div className="summary-header text-center">
                                            <img src="assets/img/cart-tab-page/thanks.png" className="mb-3" alt=""/>
                                            <h3>Thank You, John !</h3>
                                            <p className="mt-4">Huraaay! You order has been placed successfully. <br/>We
                                                received your payment and wrapping up your stuff for shipping</p>
                                        </div>
                                        <div className="summary-box cart-box mt-100">
                                            <div className="summary-content">
                                                <div className="order-part">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="common-left">
                                                                <h4>Order Details</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div
                                                                className="common-right pt-80 d-flex justify-content-between mb-70">
                                                                <div className="slub-shirt">
                                                                    <h5>Slub shirt</h5>
                                                                    <ul className="mt-4">
                                                                        <li>#71839734342234</li>
                                                                        <li>Size:M</li>
                                                                        <li>Color:Pink</li>
                                                                        <li>Qty: 1 Item(shipping)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="price">
                                                                    <h5>$26</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-8 offset-lg-4">
                                                            <div
                                                                className="common-right d-flex justify-content-between mb-70">
                                                                <div className="slub-shirt">
                                                                    <h5>Denim Jacket</h5>
                                                                    <ul className="mt-4">
                                                                        <li>#71839734342234</li>
                                                                        <li>Size:M</li>
                                                                        <li>Color:Blue</li>
                                                                        <li>Qty: 2 Item(shipping)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="price">
                                                                    <h5>$32</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-8 offset-lg-4">
                                                            <div
                                                                className="common-right d-flex justify-content-between">
                                                                <div className="slub-shirt">
                                                                    <h5>SweatShirt</h5>
                                                                    <ul className="mt-4">
                                                                        <li>#71839734342234</li>
                                                                        <li>Size:M</li>
                                                                        <li>Color:Grey</li>
                                                                        <li>Qty: 4 Item(shipping)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="price">
                                                                    <h5>$100</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="estimation-part mt-70">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <div className="common-left">
                                                                <h4>Estimation</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 offset-lg-1">
                                                            <div
                                                                className="common-right pt-80 d-flex justify-content-between mb-70">
                                                                <div>
                                                                    <ul>
                                                                        <li>#Order</li>
                                                                        <li>Bonus / Discount</li>
                                                                        <li>Taxes</li>
                                                                        <li className="mt-4">Total</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="price">
                                                                    <ul>
                                                                        <li>$ 158</li>
                                                                        <li>$ -10</li>
                                                                        <li>$ 0</li>
                                                                        <li className="mt-4">$ 158,00</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                                        <li>Anastasia Alatore</li>
                                                                        <li>EC1A 1AA</li>
                                                                        <li>221B Dorset</li>
                                                                        <li>London</li>
                                                                        <li>Uk</li>
                                                                        <li>+230 544 65 768</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="billing">
                                                                    <h5>Billing Address</h5>
                                                                    <ul className="mt-4">
                                                                        <li>Anastasia Alatore</li>
                                                                        <li>EC1A 1AA</li>
                                                                        <li>221B Dorset</li>
                                                                        <li>London</li>
                                                                        <li>Uk</li>
                                                                        <li>+230 544 65 768</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-8 offset-lg-4">
                                                            {/*<div*/}
                                                            {/*    className="common-right d-flex justify-content-between mb-70">*/}
                                                            {/*    <div className="method">*/}
                                                            {/*        <h5>Shipping Method</h5>*/}
                                                            {/*        <ul className="mt-4">*/}
                                                            {/*            <li>Standard 3-5 Business days</li>*/}
                                                            {/*        </ul>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="payment">*/}
                                                            {/*        <h5>Payment Method</h5>*/}
                                                            {/*        <ul className="mt-4">*/}
                                                            {/*            <li>Credit Card 123456789101</li>*/}
                                                            {/*        </ul>*/}
                                                            {/*    </div>*/}
                                                            {/*</div>*/}
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
                                    <a href="#" className="template-btn2 off1">Checkout <span>⇀</span></a>
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