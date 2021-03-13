import {FormEvent, FormEventHandler, useContext, useState} from "react";
import {api} from "./api";
import {AuthResponse} from "./model";
import {StoreContext} from "../../utils/store/Store";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {notification, Space} from "antd";

export const AuthForm = () => {
    const {loading} = useContext(StoreContext)
    const [stateLoading, dispatchLoading] = loading
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleChangeInput = handleSetState => e => handleSetState(e.target.value)
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatchLoading({type: SET_LOADING, payload: true} as Action)

        const body = {email, password}
        const result = await api.login<AuthResponse>(body)

        if (result.error) {
            notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });
        }
        dispatchLoading({type: SET_LOADING, payload: false} as Action)
    }

    return (
        <>
            <Space>
                <div className="login-popup">
                    <div className="login-content">
                        <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Login</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="input-group mb-40">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i
                                        className="fa fa-envelope-o"/></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Ferracini@example.com"
                                       aria-label="Username" aria-describedby="basic-addon1"
                                       onChange={handleChangeInput(setEmail)}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon2"><i
                                        className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="**********"
                                       aria-label="password" aria-describedby="basic-addon2"
                                       onChange={handleChangeInput(setPassword)}/>
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
            </Space>
        </>
    )
}