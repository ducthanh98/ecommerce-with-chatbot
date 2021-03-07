import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fashion and Clothing Shop</title>
                <link rel="icon" href="/favicon.png" sizes="20x20" type="image/png"/>
                <link rel="stylesheet" href="/css/animate.css"/>
                <link rel="stylesheet" href="/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/magnific-popup.css"/>
                <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/css/linearicons.css"/>
                <link rel="stylesheet" href="/css/themify-icons.css"/>
                <link rel="stylesheet" href="/css/datepicker.min.css"/>
                <link rel="stylesheet" href="/css/cookiealert.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="/css/responsive.css"/>
                <link rel="stylesheet" href="../../codingeek-js/codingeek.html"/>
            </Head>

            <main className={styles.main}>
                <div className="preloader" id="preloader">
                    <div className="preloader-inner">
                        <div className="spinner">
                            <div className="dot1"/>
                            <div className="dot2"/>
                        </div>
                    </div>
                </div>
                <div className="body-overlay" id="body-overlay"/>
                <div className="search-popup" id="search-popup">
                    <form action="https://codingeek.net/html/roberto-ferracini/index.html" className="search-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"
                                   onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Search Here'" required/>
                        </div>
                        <button type="submit" className="submit-btn"><i className="fa fa-search"/></button>
                    </form>
                </div>
                <div className="promotion-popup" id="promotion-popup">
                    <div className="container">
                        <div className="row modal-custom-margin">
                            <div className="col-lg-6 px-0">
                                <div className="modal-image"/>
                            </div>
                            <div className="col-lg-6 px-0">
                                <div className="modal-right text-center">
                                    <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                                    <h2>Be the First <br/>to know</h2>
                                    <p className="mt-4 mb-5">Sign up for emails to get our latest style <br/>news before
                                        everybody else</p>
                                    <form action="#">
                                        <input type="email" className placeholder="Enter Email Address Here"/>
                                        <button type="submit"><span>⇀</span></button>
                                    </form>
                                    <label>Prevent This Pop-up
                                        <input type="checkbox"/>
                                        <span className="checkmark"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="login-popup">
                    <div className="login-content">
                        <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Login</h2>
                        </div>
                        <form action="#">
                            <div className="input-group mb-40">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i
                                        className="fa fa-envelope-o"/></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Ferracini@example.com"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon2"><i
                                        className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="**********"
                                       aria-label="password" aria-describedby="basic-addon2"/>
                            </div>
                            <div className="text-right">
                                <a href="#" className="when-click-forgot-password">Forgot Password?</a>
                            </div>
                            <button type="submit" className="template-btn2 mt-5">Login <span>⇀</span></button>
                        </form>
                        <div className="login-bottom text-center">
                            <p>You don’t have an account? <a href="#" className="when-click-signup">Sign up</a></p>
                        </div>
                    </div>
                    <div className="signup-content">
                        <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form action="#">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user-o"/></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter Username"/>
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-envelope-o"/></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Enter Email"/>
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Create Password"/>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Confirm Password"/>
                            </div>
                            <div className="check-option mt-5">
                                <input type="checkbox" id="checkbox" className="mb-3"/>
                                <label htmlFor="checkbox" className="ml-3">Accept Terms &amp; Conditions</label> <br/>
                                <input type="checkbox" id="checkbox2"/>
                                <label htmlFor="checkbox2" className="ml-3">Yes, I’d love to receive emails with great
                                    content
                                    And updates</label>
                            </div>
                            <button type="submit" className="template-btn2 mt-5">Sign Up <span>⇀</span></button>
                            <button type="submit" className="template-btn2 on2">Login with Gmail <span>⇀</span>
                            </button>
                        </form>
                        <div className="login-bottom text-center">
                            <p>You don’t have an account? <a href="#" className="when-click-login">Login </a></p>
                        </div>
                    </div>
                    <div className="forgot-password-content">
                        <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Forgot Password</h2>
                        </div>
                        <form action="#">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3"><i
                                        className="fa fa-envelope-o"/></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Enter Email Address"
                                       aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <button type="submit" className="template-btn2">Send <span>⇀</span></button>
                        </form>
                        <div className="forgot-password-bottom text-center mt-4">
                            <p>We have send a link to reset your password to the above <br/>email address. Please
                                verify.
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-area navbar-expand-lg nav-style-02 nav-absolute">
                    <div className="container-fluid nav-container">
                        <div className="responsive-mobile-menu">
                            <div className="logo-wrapper">
                                <a href="index-2.html" className="logo">
                                    <img src="assets/img/logo/logo.png" alt="logo"/>
                                    <h4>robarto <br/>ferracini</h4>
                                </a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#bizcoxx_main_menu" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
                            <ul className="navbar-nav">
                                <li className="menu-item-has-children current-menu-item">
                                    <a href="#">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="index-2.html">Home 01</a></li>
                                        <li><a href="index-3.html">Home 02</a></li>
                                        <li><a href="index-4.html">Home 03</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">New Arrivals</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-page.html">Shop</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-page-1.html">Shop 01</a></li>
                                                <li><a href="shop-page-2.html">Shop 02</a></li>
                                                <li><a href="shop-page-3.html">Shop 03</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children mega-menu-list">
                                    <a href="#">Pages</a>
                                    <div className="mega-menu">
                                        <ul className="mega-menu-inner">
                                            <li><a href="about-page.html">About us</a></li>
                                            <li><a href="cart-page.html">Cart page</a></li>
                                            <li><a href="cart-tab-page.html">Cart Tab</a></li>
                                            <li><a href="blog-page-02.html">Blog page 01</a></li>
                                        </ul>
                                        <ul className="mega-menu-inner">
                                            <li><a href="blog-page.html">Blog page 02</a></li>
                                            <li><a href="blog-single-page-02.html">Blog Single 01</a></li>
                                            <li><a href="blog-single-page.html">Blog Single 02</a></li>
                                            <li><a href="faq-page.html">FAQ page</a></li>
                                        </ul>
                                        <ul className="mega-menu-inner">
                                            <li><a href="profile-page.html">Profile page</a></li>
                                            <li><a href="returns-page.html">Return page</a></li>
                                            <li><a href="404.html">404 page</a></li>
                                            <li><a href="coming-soon-page.html">Comming Soon</a></li>
                                        </ul>
                                        <ul className="mega-menu-inner">
                                            <li>
                                                <img src="assets/img/header-page/mega-menu.jpg" alt=""/>
                                                <h5>Extra 10% off</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="contact-us-page.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right-content">
                            <ul>
                                <li className="search" id="search">
                                    <span className="lnr lnr-magnifier"/>
                                </li>
                                <li className="ml-3 floating-icon-3 user">
                                    <span className="lnr lnr-user"/>
                                </li>
                                <li className="cart floating-icon-1 ml-4">
                                    <div className="cart-sec">
                                        <a href="#"><span className="lnr lnr-cart"/></a>
                                        <span className="cart-count">2</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
                <section className="categories-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 pr-0">
                                <div className="section-title text-center">
                                    <h2>Categories</h2>
                                </div>
                                <div className="categories-item d-lg-flex justify-content-end">
                                    <div className="single-item active fadeIn mb-5 mb-lg-0" data-wow-duration=".8s"
                                         data-wow-delay=".2s">
                                        <div className="item-image cat-1">
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="shop-page.html">Shop for Sweatshirt</a></h5>
                                            <a href="shop-page.html">Explore Collection </a>
                                        </div>
                                    </div>
                                    <div className="single-item fadeIn" data-wow-duration=".8s" data-wow-delay=".4s">
                                        <div className="item-image cat-2">
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="shop-page.html">Shop for Accessories</a></h5>
                                            <a href="shop-page.html">Live in your pockets</a>
                                        </div>
                                    </div>
                                    <div className="single-item fadeIn" data-wow-duration=".8s" data-wow-delay=".6s">
                                        <div className="item-image cat-3">
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="shop-page.html">Shop for Bikini</a></h5>
                                            <a href="shop-page.html">Must haves for this summer</a>
                                        </div>
                                    </div>
                                    <div className="single-item fadeIn" data-wow-duration=".8s" data-wow-delay=".8s">
                                        <div className="item-image cat-4">
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="shop-page.html">Shop for Shoes</a></h5>
                                            <a href="shop-page.html">Hot line things</a>
                                        </div>
                                    </div>
                                    <div className="single-item fadeIn" data-wow-duration=".8s" data-wow-delay="1s">
                                        <div className="item-image cat-5">
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="shop-page.html">Shop for hats</a></h5>
                                            <a href="shop-page.html">Live in your pockets</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                                     src="assets/img/home-1/pick/pick-1.png" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-2.jpg" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-3.jpg" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-4.png" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-4.png" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-2.jpg" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-3.jpg" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-2.jpg" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                     src="assets/img/home-1/pick/pick-1.png" alt=""/>
                                                <img className="image-item-02" src="assets/img/shop-page/item7.png"
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
                                                <img src="assets/img/home-1/client/slide-1.png" alt=""/>
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
                                                <img src="assets/img/home-1/client/slide-2.png" alt=""/>
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
                                    <img src="assets/img/home-1/service/item-1.png" alt=""/>
                                    <h5 className="my-4">International Shipping</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                        nibh, at ullamcorper orci ullamcorper ut.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".4s">
                                <div className="single-item mb-5 mb-lg-0">
                                    <img src="assets/img/home-1/service/item-2.png" alt=""/>
                                    <h5 className="my-4">Customer Care</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                        nibh, at ullamcorper orci ullamcorper ut.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".6s">
                                <div className="single-item">
                                    <img src="assets/img/home-1/service/item-3.png" alt=""/>
                                    <h5 className="my-4">Secured Payment</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue
                                        nibh, at ullamcorper orci ullamcorper ut.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  fadeIn" data-wow-duration=".8s" data-wow-delay=".8s">
                                <div className="single-item">
                                    <img src="assets/img/home-1/service/item-4.png" alt=""/>
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
                                    <img src="assets/img/home-1/gallery/gallery-1.png" alt=""/>
                                </div>
                                <div className="item-content text-center">
                                    <h6>23 June 2019</h6>
                                    <h5>green styling</h5>
                                </div>
                                <div className="hover-state">
                                    <a href="assets/img/home-1/gallery/gallery-1.png"><i className="fa fa-arrows-alt"/></a>
                                </div>
                            </div>
                            <div className="single-item text-center">
                                <div className="item-image">
                                    <img src="assets/img/home-1/gallery/gallery-2.png" alt=""/>
                                </div>
                                <div className="item-content text-center">
                                    <h6>23 June 2019</h6>
                                    <h5>green styling</h5>
                                </div>
                                <div className="hover-state">
                                    <a href="assets/img/home-1/gallery/gallery-2.png"><i className="fa fa-arrows-alt"/></a>
                                </div>
                            </div>
                            <div className="single-item text-center">
                                <div className="item-image">
                                    <img src="assets/img/home-1/gallery/gallery-3.png" alt=""/>
                                </div>
                                <div className="item-content text-center">
                                    <h6>23 June 2019</h6>
                                    <h5>green styling</h5>
                                </div>
                                <div className="hover-state">
                                    <a href="assets/img/home-1/gallery/gallery-3.png"><i className="fa fa-arrows-alt"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="newsletter-area section-padding-both">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>subscribe to our newsletter</h2>
                                </div>
                                <p>Receive 10% off on your first order and be among the first to receive our exclusive
                                    emails about discounts and new arrivals.</p>
                                <form action="#">
                                    <input type="email" className="common-input"
                                           placeholder="Enter Your Email Address Here" onFocus="this.placeholder = ''"
                                           onBlur="this.placeholder = 'Enter Your Email Address Here'" required/>
                                    <button type="submit"><span>⇀</span></button>
                                </form>
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
                <footer className="footer-area">
                    <div className="footer-widget">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer-widget widget widget_nav_menu">
                                        <h5 className="widget-title">help &amp; information</h5>
                                        <ul>
                                            <li><a href="#">help</a></li>
                                            <li><a href="#">track order</a></li>
                                            <li><a href="#">delivery &amp; returns</a></li>
                                            <li><a href="#">10% student discount</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-widget widget widget_nav_menu">
                                        <h5 className="widget-title">about us</h5>
                                        <ul>
                                            <li><a href="#">about us</a></li>
                                            <li><a href="#">career at theshop</a></li>
                                            <li><a href="#">investors site</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-widget widget widget_nav_menu">
                                        <h5 className="widget-title">Customer Care</h5>
                                        <ul>
                                            <li><a href="#">gift card</a></li>
                                            <li><a href="#">size guide</a></li>
                                            <li><a href="#">terms &amp; condition</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-widget widget">
                                        <h5 className="widget-title">newsletter</h5>
                                        <p>Sign up to Theshop newlettter for 10% <br/>Discount code.</p>
                                        <form action="#" className="mt-4">
                                            <input type="email" className placeholder="Your Email Address"
                                                   onFocus="this.placeholder = ''"
                                                   onBlur="this.placeholder = 'Your Email Address'" required/>
                                            <button type="submit"><span>⇀</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 d-md-flex justify-content-between">
                                    <div className="copyright-logo align-self-center">
                                        <a href="index-2.html"><img src="assets/img/logo/logo2.png" alt=""/></a>
                                    </div>
                                    <div className="copyright-content align-self-center text-center">
                                        © Copyright Roberto Ferracini 2019 - made with <i
                                        className="fa fa-heart"/> by <a href="https://codingeek.net/">Codingeek.</a>
                                    </div>
                                    <div className="copyright-link align-self-center">
                                        <ul>
                                            <li><a href="https://www.instagram.com/codingeeknet">instagram</a></li>
                                            <li><a href="https://www.facebook.com/codingeek.net/">facebook</a></li>
                                            <li><a href="https://twitter.com/codingeeknet">twitter</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="back-to-top">
                    <span>Back to top</span>
                </div>
                <div className="alert text-center cookiealert" role="alert">
                    <b>Do you like cookies?</b> 🍪 We use cookies to ensure you get the best experience on our
                    website. <a href="#" target="_blank">Learn more</a>
                    <button type="button" className="btn btn-sm acceptcookies" aria-label="Close">
                        I agree
                    </button>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
