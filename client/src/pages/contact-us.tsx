import {useEffect} from "react";
import {initEvent} from "../utils/script/main";

const ContactUs = () => {
    useEffect(() => {
        initEvent()
    }, [])
    return (
        <div className="contact-us-page common-typography">
            {/* Contact Form Starts */}
            <section className="contact-form-area common-form common-input2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-title section-padding-top2">
                                <h2>Contact us</h2>
                                <h3>Hello. Let’s get in touch</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact-bg">
                                <form action="#">
                                    <h6>Full Name</h6>
                                    <input type="text" placeholder="e.i Annastasia Alatore"/>
                                    <h6>Email Address</h6>
                                    <input type="email" placeholder="e.i User@gmail.com"/>
                                    <h6>Reason For Contact</h6>
                                    <input type="text" id="reason"/>
                                    <h6>Message</h6>
                                    <textarea cols={30} rows={10} defaultValue={""}/>
                                    <button type="submit" className="template-btn2 off1">Add Your Comment <span>⇀</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1 col-lg-5">
                            <div className="contact-bg">
                                <div className="contact-address">
                                    <div className="single-part">
                                        <h6>In The Bay Area?</h6>
                                        <p>Los Angeles,<br/> 23 Valencia Street<br/> America</p>
                                    </div>
                                    <div className="single-part mt-70">
                                        <h6>Store Hours</h6>
                                        <p>Monday - Saturday<br/> 11 am - 7 pm<br/> Sunday<br/> 12 pm - 6 pm</p>
                                    </div>
                                    <div className="single-part mt-70">
                                        <h6>Support?</h6>
                                        <p>robertoferracni@support.com<br/> +26 736 32849</p>
                                    </div>
                                    <div className="single-part-img mt-70">
                                        <img src="/img/contact-us-page/contact-img.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form End */}
            {/* Instagram Starts */}
            <section className="instagram-area">
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
            {/* Instagram End */}
        </div>

    )
}

export default ContactUs