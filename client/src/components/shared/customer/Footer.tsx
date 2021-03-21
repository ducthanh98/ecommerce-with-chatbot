export const Footer = () => {
    return (
        <>
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
                                        <input type="email" placeholder="Your Email Address"
                                               required/>
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
                                    <a href="index-2.html"><img src="/img/logo/logo2.png" alt=""/></a>
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
        </>
    )
}