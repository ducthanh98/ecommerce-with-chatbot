import {ActiveLink} from "./ActiveRouter";
import {useContext} from "react";
import {StoreContext} from "../../../utils/store/Store";
import {SET_CART} from "../../../utils/store/reducers/cart";

export const Menu = () => {
    const {user, cart} = useContext(StoreContext)
    const [userState, dispatchUser] = user
    const [cartState, dispatchCart] = cart

    const handleShowUser = () => {

        if (userState.logged_in) {
            console.log('IMPLEMENT ME')
        } else {
            $('.login-popup').addClass('active');
            $('.body-overlay').addClass('active');
            $('.floating-icon').addClass('active');
            $('.live-chat-popup').removeClass('active');
        }

    }

    const handleRemoveCartItem = (id) => {
        let cart = [...cartState.cart]
        cart = cart.filter(item => item.id != id)
        dispatchCart({type: SET_CART, payload: {cart: cart}})
    }

    return (
        <>
            <nav className="navbar navbar-area navbar-expand-lg nav-style-02 nav-absolute">
                <div className="container-fluid nav-container">
                    <div className="responsive-mobile-menu">
                        <div className="logo-wrapper">
        <span className="logo">
          <img src="/img/logo/logo.png" alt="logo"/>
          <h4>robarto <br/>ferracini</h4>
        </span>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span></button>
                    </div>
                    <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
                        <ul className="navbar-nav">
                            <ActiveLink href='/'>
                                Home
                            </ActiveLink>
                            <ActiveLink href='/products'>
                                Products
                            </ActiveLink>
                            <ActiveLink href='/contact-us'>
                                Contact Us
                            </ActiveLink>

                        </ul>
                    </div>
                    <div className="nav-right-content">
                        <ul>
                            <li className="ml-3 floating-icon-3 user" onClick={handleShowUser}>
          <span className="lnr lnr-user">
          </span></li>
                            <li className="cart floating-icon-1 ml-4">
                                <div className="cart-sec">
                                    <a href="#"><span className="lnr lnr-cart"/></a>
                                    <span className="cart-count">{cartState.cart.length}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="cart-popup" id="cart-popup">
                <div className="cart-content">
                    <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                    <div className="cart-title text-center">
                        <h2>Cart</h2>
                        <h6 className="text-right">{cartState.cart.length} Items</h6>
                    </div>
                    <div className="cart-items">
                        {
                            cartState.cart.map(item => (
                                <div className="single-item-function-1">
                                    <div className="single-item d-flex justify-content-between mb-4">
                                        <div className="item-left d-flex">
                                            <div className="item-image image-1"
                                                 style={{backgroundImage: `url("http://localhost:5000/images/${item.image}")`}}/>
                                            <div className="item-name align-self-center">
                                                <h6>{item.name}</h6>
                                            </div>
                                        </div>
                                        <div className="item-right d-flex align-items-center">
                                            <div className="item-price">
                                                <h6>{item.quantity}</h6>
                                            </div>
                                            <div className="item-icon trash-icon-1"
                                                 onClick={() => handleRemoveCartItem(item.id)}>
                                                <i className="fa fa-trash-o"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="total-price text-right">
                        <h4>Total</h4>
                        <h3>$ {cartState.cart.reduce((accumulator, currentValue) => (accumulator + (currentValue.quantity * currentValue.price)), 0)}</h3>
                    </div>
                    <div className="cart-buttons mt-4 mt-xl-5">
                        <a href="#" className="template-btn2 off2 mb-4">View Cart <span>⇀</span></a>
                        <a href="#" className="template-btn2 off1">Checkout <span>⇀</span></a>
                    </div>
                </div>
            </div>

        </>
    )
}