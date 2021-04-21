import {StoreContext} from "../utils/store/Store";
import {useContext, useEffect} from "react";
import {SET_LOADING} from "../utils/store/reducers/loading";
import {AuthForm} from "../components/auth/Form";
import {initEvent} from "../utils/script/main";
import {Category} from '../components/home/category'

export default function Home() {
    useEffect(() => {
        initEvent();
    }, [])

    const removePopup = () => {
        $('.cart-popup').removeClass('active');
        $('.body-overlay').removeClass('active');
        $('.floating-icon').removeClass('active');
    }

    return (
        <>
            <div className="body-overlay" id="body-overlay" onClick={removePopup}/>
            <div className="search-popup" id="search-popup">
                <form action="https://codingeek.net/html/roberto-ferracini/index.html" className="search-form">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" required/>
                    </div>
                    <button type="submit" className="submit-btn"><i className="fa fa-search"/></button>
                </form>
            </div>
            {/*<div className="promotion-popup" id="promotion-popup">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row modal-custom-margin">*/}
            {/*            <div className="col-lg-6 px-0">*/}
            {/*                <div className="modal-image"/>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-6 px-0">*/}
            {/*                <div className="modal-right text-center">*/}
            {/*                    <span className="cross-icon"><i className="lnr lnr-cross"/></span>*/}
            {/*                    <h2>Be the First <br/>to know</h2>*/}
            {/*                    <p className="mt-4 mb-5">Sign up for emails to get our latest style <br/>news before*/}
            {/*                        everybody else</p>*/}
            {/*                    <form action="#">*/}
            {/*                        <input type="email" placeholder="Enter Email Address Here"/>*/}
            {/*                        <button type="submit"><span>⇀</span></button>*/}
            {/*                    </form>*/}
            {/*                    <label>Prevent This Pop-up*/}
            {/*                        <input type="checkbox"/>*/}
            {/*                        <span className="checkmark"/>*/}
            {/*                    </label>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="cart-popup" id="cart-popup">
                <div className="cart-content">
                    <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                    <div className="cart-title text-center">
                        <h2>Cart</h2>
                        <h6 className="text-right">3 Items</h6>
                    </div>
                    <div className="cart-items">
                        <div className="single-item-function-1">
                            <div className="single-item d-flex justify-content-between mb-4">
                                <div className="item-left d-flex">
                                    <div className="item-image image-1"/>
                                    <div className="item-name align-self-center">
                                        <h6>Pink Dress</h6>
                                    </div>
                                </div>
                                <div className="item-right d-flex align-items-center">
                                    <div className="item-price">
                                        <h6>$ 13</h6>
                                    </div>
                                    <div className="item-icon trash-icon-1">
                                        <i className="fa fa-trash-o"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-item-function-2">
                            <div className="single-item d-flex justify-content-between mb-4">
                                <div className="item-left d-flex">
                                    <div className="item-image image-2"/>
                                    <div className="item-name align-self-center">
                                        <h6>Black Heel</h6>
                                    </div>
                                </div>
                                <div className="item-right d-flex align-items-center">
                                    <div className="item-price">
                                        <h6>$ 13</h6>
                                    </div>
                                    <div className="item-icon trash-icon-2">
                                        <i className="fa fa-trash-o"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-item-function-3">
                            <div className="single-item d-flex justify-content-between">
                                <div className="item-left d-flex">
                                    <div className="item-image image-3"/>
                                    <div className="item-name align-self-center">
                                        <h6>Brown Bag</h6>
                                    </div>
                                </div>
                                <div className="item-right d-flex align-items-center">
                                    <div className="item-price">
                                        <h6>$ 13</h6>
                                    </div>
                                    <div className="item-icon trash-icon-3">
                                        <i className="fa fa-trash-o"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="total-price text-right">
                        <h4>Total</h4>
                        <h3>$ 158,00</h3>
                    </div>
                    <div className="cart-buttons mt-4 mt-xl-5">
                        <a href="#" className="template-btn2 off2 mb-4">View Cart <span>⇀</span></a>
                        <a href="#" className="template-btn2 off1">Checkout <span>⇀</span></a>
                    </div>
                </div>
            </div>
            <div className="live-chat-popup" id="live-chat-popup">
                <div className="live-chat-content live-chat-part-1">
                    <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                    <div className="cart-title text-center">
                        <h2>Live Chat</h2>
                    </div>
                    <div className="all-chat">
                        <div className="single-chat mb-4 when-click-change-live-chat">
                            <div className="overlay-image image-1">
                                <div className="hover-state">
                                    <p>Customer Care, <span>Alan Yve Laurent</span> <i
                                        className="fa fa-comment-o ml-3"/></p>
                                </div>
                            </div>
                        </div>
                        <div className="single-chat mb-4 when-click-change-live-chat">
                            <div className="overlay-image image-2">
                                <div className="hover-state">
                                    <p>Customer Care, <span>Alan Yve Laurent</span> <i
                                        className="fa fa-comment-o ml-3"/></p>
                                </div>
                            </div>
                        </div>
                        <div className="single-chat when-click-change-live-chat">
                            <div className="overlay-image image-3">
                                <div className="hover-state">
                                    <p>Customer Care, <span>Alan Yve Laurent</span> <i
                                        className="fa fa-comment-o ml-3"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="live-chat-content-2 live-chat-part-2">
                    <div className="live-chat-content-2-top">
                        <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Live Chat</h2>
                        </div>
                        <div className="all-chat d-flex justify-content-between">
                            <div className="single-chat">
                                <div className="overlay-image image-1">
                                    <div className="hover-state">
                                    </div>
                                </div>
                            </div>
                            <div className="single-chat">
                                <div className="overlay-image image-2">
                                    <div className="hover-state">
                                    </div>
                                </div>
                            </div>
                            <div className="single-chat">
                                <div className="overlay-image image-3">
                                    <div className="hover-state">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="live-chat-box">
                        <p className="text-center p-white pb-4">Sunday 23, 11:20am</p>
                        <div className="message-1">
                            <p className="message-name ml-4">Laurent</p>
                            <input type="text" placeholder="Are you ready?"/>
                            <p className="message-date ml-4">Sunday 23, 11:20am</p>
                        </div>
                        <div className="message-2 text-right mt-3">
                            <p className="message-name mr-4">You</p>
                            <input type="text" placeholder="Yes Sure, Let’s start"/>
                            <p className="message-date mr-4">Sunday 23, 11:20am</p>
                        </div>
                        <div className="message-submit pl-5 mt-3">
                            <p className="submit-text ml-4">Laurent is typing</p>
                            <form action="#">
                                <input type="email" placeholder="Type something"/>
                                <button type="submit" className="search-button"><i className="fa fa-paper-plane"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section className="banner-area">
                <div className="slider-area owl-carousel">
                    <div className="single-slide">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="banner-left">
                                        <div className="banner-image image-1">
                                            <span>01</span>
                                        </div>
                                        <div className="banner-icon">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook-official"/></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"/></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-self-center">
                                    <div className="banner-right">
                                        <div className="banner-right-top d-md-flex justify-content-between">
                                            <div className="banner-content align-self-end">
                                                <h2>Discover <br/>New Arrivals</h2>
                                                <p className="different">Summer collection 2019</p>
                                            </div>
                                            <div className="right-img">
                                            </div>
                                        </div>
                                        <div className="banner-middle-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                                augue nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget
                                                nullam non nisi est. Pharetra et ultrices neque ornare. Ac felis
                                                donec et odio pellentesque diam volutpat commodo sed. Dolor sed
                                                viverra ipsum nunc aliquet. Pharetra massa massa ultricies mi quis
                                                hendrerit dolor. In nisl nisi scelerisque eu ultrices.</p>
                                            <span>R</span>
                                        </div>
                                        <div className="banner-btn">
                                            <a href="#" className="template-btn mr-4">Shop women</a>
                                            <a href="#" className="template-btn tb-2 mt-sm-3">Shop men</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="banner-left">
                                        <div className="banner-image image-2">
                                            <span>02</span>
                                        </div>
                                        <div className="banner-icon">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook-official"/></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"/></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-self-center">
                                    <div className="banner-right">
                                        <div className="banner-right-top d-md-flex justify-content-between">
                                            <div className="banner-content align-self-end">
                                                <h2>Discover <br/>New Arrivals</h2>
                                                <p className="different">Summer collection 2019</p>
                                            </div>
                                            <div className="right-img">
                                            </div>
                                        </div>
                                        <div className="banner-middle-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                                augue nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget
                                                nullam non nisi est. Pharetra et ultrices neque ornare. Ac felis
                                                donec et odio pellentesque diam volutpat commodo sed. Dolor sed
                                                viverra ipsum nunc aliquet. Pharetra massa massa ultricies mi quis
                                                hendrerit dolor. In nisl nisi scelerisque eu ultrices.</p>
                                            <span>R</span>
                                        </div>
                                        <div className="banner-btn">
                                            <a href="#" className="template-btn mr-4">Shop women</a>
                                            <a href="#" className="template-btn tb-2 mt-sm-3">Shop men</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="banner-left">
                                        <div className="banner-image image-3">
                                            <span>03</span>
                                        </div>
                                        <div className="banner-icon">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook-official"/></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"/></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-self-center">
                                    <div className="banner-right">
                                        <div className="banner-right-top d-md-flex justify-content-between">
                                            <div className="banner-content align-self-end">
                                                <h2>Discover <br/>New Arrivals</h2>
                                                <p className="different">Summer collection 2019</p>
                                            </div>
                                            <div className="right-img">
                                            </div>
                                        </div>
                                        <div className="banner-middle-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                                augue nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget
                                                nullam non nisi est. Pharetra et ultrices neque ornare. Ac felis
                                                donec et odio pellentesque diam volutpat commodo sed. Dolor sed
                                                viverra ipsum nunc aliquet. Pharetra massa massa ultricies mi quis
                                                hendrerit dolor. In nisl nisi scelerisque eu ultrices.</p>
                                            <span>R</span>
                                        </div>
                                        <div className="banner-btn">
                                            <a href="#" className="template-btn mr-4">Shop women</a>
                                            <a href="#" className="template-btn tb-2 mt-sm-3">Shop men</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="banner-left">
                                        <div className="banner-image image-4">
                                            <span>04</span>
                                        </div>
                                        <div className="banner-icon">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook-official"/></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"/></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-self-center">
                                    <div className="banner-right">
                                        <div className="banner-right-top d-md-flex justify-content-between">
                                            <div className="banner-content align-self-end">
                                                <h2>Discover <br/>New Arrivals</h2>
                                                <p className="different">Summer collection 2019</p>
                                            </div>
                                            <div className="right-img">
                                            </div>
                                        </div>
                                        <div className="banner-middle-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                                augue nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget
                                                nullam non nisi est. Pharetra et ultrices neque ornare. Ac felis
                                                donec et odio pellentesque diam volutpat commodo sed. Dolor sed
                                                viverra ipsum nunc aliquet. Pharetra massa massa ultricies mi quis
                                                hendrerit dolor. In nisl nisi scelerisque eu ultrices.</p>
                                            <span>R</span>
                                        </div>
                                        <div className="banner-btn">
                                            <a href="#" className="template-btn mr-4">Shop women</a>
                                            <a href="#" className="template-btn tb-2 mt-sm-3">Shop men</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="banner-left">
                                        <div className="banner-image image-5">
                                            <span>05</span>
                                        </div>
                                        <div className="banner-icon">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook-official"/></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"/></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-self-center">
                                    <div className="banner-right">
                                        <div className="banner-right-top d-md-flex justify-content-between">
                                            <div className="banner-content align-self-end">
                                                <h2>Discover <br/>New Arrivals</h2>
                                                <p className="different">Summer collection 2019</p>
                                            </div>
                                            <div className="right-img">
                                            </div>
                                        </div>
                                        <div className="banner-middle-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
                                                augue nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget
                                                nullam non nisi est. Pharetra et ultrices neque ornare. Ac felis
                                                donec et odio pellentesque diam volutpat commodo sed. Dolor sed
                                                viverra ipsum nunc aliquet. Pharetra massa massa ultricies mi quis
                                                hendrerit dolor. In nisl nisi scelerisque eu ultrices.</p>
                                            <span>R</span>
                                        </div>
                                        <div className="banner-btn">
                                            <a href="#" className="template-btn mr-4">Shop women</a>
                                            <a href="#" className="template-btn tb-2 mt-sm-3">Shop men</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collection-area section-padding-both2">
                <div className="floating-icon" id="service_info_item">
                    <div className="floating-icon__is floating-icon-info floating-icon-1">
                        <a href="#"><span className="ti-shopping-cart"/></a>
                    </div>
                    <div className="floating-icon__is floating-icon-message floating-icon-2">
                        <a href="#"><span className="ti-comment-alt"/></a>
                    </div>
                    <div className="floating-icon__is floating-icon-location floating-icon-3">
                        <span className="ti-world"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 align-self-center">
                            <div className="collection-content">
                                <div className="section-title">
                                    <h2 className="collection-h2">Limited Edition <br/>Collection</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue nibh,
                                    at ullamcorper orci ullamcorper ut. Nisl tincidunt eget nullam non nisi est.
                                    Pharetra et ultrices neque ornare. Ac felis donec et odio pellentesque diam
                                    volutpat commodo sed. Dolor sed viverra ipsum nunc aliquet. Pharetra massa massa
                                    ultricies mi quis hendrerit dolor. In nisl nisi celerisque eu ultrices. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. In rhoncusaugue nibh.</p>
                                <div className="btn-margin-top">
                                    <a href="#" className="template-btn2">Explore Collection <span>⇀</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 fadeInRight">
                            <div className="collection-image">
                                <div className="collection-bg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Category/>
            <section className="discount-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 fadeInLeft">
                            <div className="discount-content">
                                <div className="section-title">
                                    <h2>20% Discount On Summer Collection</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue nibh,
                                    at ullamcorper orci ullamcorper ut. Nisl tincidunt eget nullam non nisi est.
                                    Pharetra et ultrices neque ornare. Ac felis donec et odio pellentesque diam
                                    volutpat commodo sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                    rhoncus augue nibh, at ullamcorper orci ullamcorper ut.</p>
                                <div className="btn-margin-top mb-5 mb-lg-0">
                                    <a href="#" className="template-btn2">view items <span>⇀</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 fadeInRight">
                            <div className="discount-image">
                                <div className="d-flex justify-content-between">
                                    <div className="image-bg image-1"/>
                                    <div className="image-bg image-2"/>
                                    <div className="image-bg image-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-area section-padding-both">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-8">
                            <div className="video-content">
                                <div className="section-title">
                                    <h2>Embrace The <br/>New Generation</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue nibh,
                                    at ullamcorper orci ullamcorper ut. Nisl tincidunt eget nullam non nisi est.
                                    Pharetra et ultrices neque ornare. Ac felis donec et odio pellentesque diam
                                    volutpat commodo sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                    rhoncus augue nibh, at ullamcorper orci ullamcorper ut.</p>
                                <a href="#" className="template-btn3">Check It Out <span>⇀</span></a>
                            </div>
                        </div>
                        <div className="video-icon">
                            <a href="https://www.youtube.com/watch?v=bJ3RJlmGn6k" className="button-video"><i
                                className="fa fa-play"/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="picks-area section-padding-both">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2>Top Picks For You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-accordion picks-tab text-center">
                                <div className="tab">
                                    <ul>
                                        <li className="tab-one active">new arrivals</li>
                                        <li className="tab-second">best seller</li>
                                        <li className="tab-three">sale off</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-one-content lost active">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-1.png" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item active">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-2.jpg" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-3.jpg" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-4.png" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-second-content lost">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-4.png" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-2.jpg" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-3.jpg" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-three-content lost">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-2.jpg" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-cart-item">
                                        <div className="single-cart-image">
                                            <img className="image-item-01 item-active"
                                                 src="/img/home-1/pick/pick-1.png" alt=""/>
                                            <img className="image-item-02" src="/img/shop-page/item7.png"
                                                 alt=""/>
                                            <div className="image-dots">
                                                <div className="dot-01"/>
                                                <div className="dot-02 active"/>
                                            </div>
                                        </div>
                                        <span className="love-icon"><i className="fa fa-heart"/></span>
                                        <div className="single-cart-content">
                                            <div className="cart-content-left">
                                                <ul className="cart-rating">
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li><i className="fa fa-star"/></li>
                                                    <li className="diff-color"><i className="fa fa-star"/></li>
                                                </ul>
                                                <h5>Belted Chino Trousers</h5>
                                                <ul className="cart-size">
                                                    <li><span>xs</span></li>
                                                    <li className="active"><span>s</span></li>
                                                    <li><span>m</span></li>
                                                    <li><span>l</span></li>
                                                    <li><span>xl</span></li>
                                                </ul>
                                            </div>
                                            <div className="cart-content-right">
                                                <span className="current-price">$45.99</span>
                                                <span className="old-price">$99.10</span>
                                            </div>
                                        </div>
                                        <div className="single-cart-button">
                                            <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                            <a href="#" className="compare-button">compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="template-btn2">view items <span>⇀</span></a>
                    </div>
                </div>
            </section>
            <section className="client-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Client <br/>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 pl-0">
                            <div className="client-slider owl-carousel">
                                <div className="single-slide">
                                    <div className="slide-top d-flex">
                                        <div className="slide-image">
                                            <img src="/img/home-1/client/slide-1.png" alt=""/>
                                        </div>
                                        <div className="slide-content align-self-center">
                                            <h4>Annaa Edouard</h4>
                                            <h6 className="diff-h6">Fashion Stylist</h6>
                                        </div>
                                    </div>
                                    <div className="slide-bottom">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                            nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget nullam non
                                            nisi est. Pharetra et ultrices neque ornare.Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. In rhoncus augue nibh, at ullamcorper orci
                                            ullamcorper ut.</p>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-top d-flex">
                                        <div className="slide-image">
                                            <img src="/img/home-1/client/slide-2.png" alt=""/>
                                        </div>
                                        <div className="slide-content align-self-center">
                                            <h4>Annaa Edouard</h4>
                                            <h6 className="diff-h6">Fashion Stylist</h6>
                                        </div>
                                    </div>
                                    <div className="slide-bottom">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                            nibh, at ullamcorper orci ullamcorper ut. Nisl tincidunt eget nullam non
                                            nisi est. Pharetra et ultrices neque ornare.Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. In rhoncus augue nibh, at ullamcorper orci
                                            ullamcorper ut.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-area section-padding-both3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".2s">
                            <div className="single-item mb-5 mb-lg-0">
                                <img src="/img/home-1/service/item-1.png" alt=""/>
                                <h5 className="my-4">International Shipping</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                    nibh, at ullamcorper orci ullamcorper ut.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".4s">
                            <div className="single-item mb-5 mb-lg-0">
                                <img src="/img/home-1/service/item-2.png" alt=""/>
                                <h5 className="my-4">Customer Care</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                    nibh, at ullamcorper orci ullamcorper ut.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".6s">
                            <div className="single-item">
                                <img src="/img/home-1/service/item-3.png" alt=""/>
                                <h5 className="my-4">Secured Payment</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                    nibh, at ullamcorper orci ullamcorper ut.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".8s">
                            <div className="single-item">
                                <img src="/img/home-1/service/item-4.png" alt=""/>
                                <h5 className="my-4">24/7 Support</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                    nibh, at ullamcorper orci ullamcorper ut.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery-area section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2>our gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-slider owl-carousel">
                        <div className="single-item text-center">
                            <div className="item-image">
                                <img src="/img/home-1/gallery/gallery-1.png" alt=""/>
                            </div>
                            <div className="item-content text-center">
                                <h6>23 June 2019</h6>
                                <h5>green styling</h5>
                            </div>
                            <div className="hover-state">
                                <a href="/img/home-1/gallery/gallery-1.png"><i className="fa fa-arrows-alt"/></a>
                            </div>
                        </div>
                        <div className="single-item text-center">
                            <div className="item-image">
                                <img src="/img/home-1/gallery/gallery-2.png" alt=""/>
                            </div>
                            <div className="item-content text-center">
                                <h6>23 June 2019</h6>
                                <h5>green styling</h5>
                            </div>
                            <div className="hover-state">
                                <a href="/img/home-1/gallery/gallery-2.png"><i className="fa fa-arrows-alt"/></a>
                            </div>
                        </div>
                        <div className="single-item text-center">
                            <div className="item-image">
                                <img src="/img/home-1/gallery/gallery-3.png" alt=""/>
                            </div>
                            <div className="item-content text-center">
                                <h6>23 June 2019</h6>
                                <h5>green styling</h5>
                            </div>
                            <div className="hover-state">
                                <a href="/img/home-1/gallery/gallery-3.png"><i className="fa fa-arrows-alt"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="instagram-area section-padding-top3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2>Follow Our Instagram</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 px-0">
                            <div className="instagram-slider owl-carousel">
                                <div className="single-slide slide-1">
                                </div>
                                <div className="single-slide slide-2">
                                </div>
                                <div className="single-slide slide-3">
                                </div>
                                <div className="single-slide slide-4">
                                </div>
                                <div className="single-slide slide-5">
                                </div>
                                <div className="single-slide slide-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AuthForm/>
        </>
    )
}
