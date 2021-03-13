import {ActiveLink} from "./ActiveRouter";

export const Menu = () => {

    return (
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
                        <ActiveLink href='/Products'>
                            Products
                        </ActiveLink>
                        <ActiveLink href='/contact-us'>
                            Contact Us
                        </ActiveLink>

                    </ul>
                </div>
                <div className="nav-right-content">
                    <ul>
                        <li className="search" id="search">
          <span className="lnr lnr-magnifier">
          </span></li>
                        <li className="ml-3 floating-icon-3 user">
          <span className="lnr lnr-user">
          </span></li>
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
    )
}