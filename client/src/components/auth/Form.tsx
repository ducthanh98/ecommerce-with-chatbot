import {FormEvent, FormEventHandler, useContext, useState} from "react";
import {api} from "./api";
import {LoginResponse} from "./model";
import {StoreContext} from "../../utils/store/Store";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {notification, Space} from "antd";
import {SET_AUTHENTICATE} from "../../utils/store/reducers/user";

export const AuthForm = () => {
    const {loading, user} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [userState, dispatchUser] = user

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleChangeInput = handleSetState => e => handleSetState(e.target.value)

    const resetPassword = () => {
        setPassword('')
        setConfirmPassword('')
    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatchLoading({type: SET_LOADING, payload: true} as Action)

        const body = {email, password}
        const result = await api.login(body)

        if (result.error) {

            notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        } else {

            dispatchUser({type: SET_AUTHENTICATE, payload: result.data} as Action)
            notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: "Login successful"
            });
            closeAuthPopup()
        }

        dispatchLoading({type: SET_LOADING, payload: false} as Action)
    }

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatchLoading({type: SET_LOADING, payload: true} as Action)

        if (password !== confirmPassword) {

            notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: "Password and confirm password not match"
            });
            return

        }

        const body = {email, password, fullname}
        const result = await api.register(body)

        if (result.error) {

            dispatchLoading({type: SET_LOADING, payload: false} as Action)
            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }


        notification.success({
            message: 'Fashion and Clothing Shop',
            placement: 'topLeft',
            className: 'custom-notification-antd',
            description: "Register successfully"
        });
        changeSignInPopup();

        dispatchLoading({type: SET_LOADING, payload: false} as Action)

    }
    const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatchLoading({type: SET_LOADING, payload: true} as Action)

        if (password !== confirmPassword) {

            notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: "Password and confirm password not match"
            });
            return

        }

        const body = {email, password, fullname}
        const result = await api.register(body)

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

    const changeSignUpPopup = () => {
        $('.login-content').addClass('part-hide');
        $('.signup-content').addClass('part-active');
        resetPassword()
    }
    const changeSignInPopup = () => {
        $('.login-content').removeClass('part-hide');
        $('.signup-content').removeClass('part-active');
        resetPassword()
    }
    const changeForgotPasswordPopup = () => {
        $('.login-content').addClass('part-hide');
        $('.signup-content').addClass('part-hide');
        $('.forgot-password-content').addClass('part-active');
    }

    const closeAuthPopup = () => {
        $('.login-popup').removeClass('active');
        $('.body-overlay').removeClass('active');
        $('.floating-icon').removeClass('active');
    }

    return (
        <>
            <Space>
                <div className="login-popup">
                    <div className="login-content">
                        <span onClick={closeAuthPopup} className="cross-icon"><i className="lnr lnr-cross"/></span>
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
                                       aria-label="Username" value={email} aria-describedby="basic-addon1"
                                       onChange={handleChangeInput(setEmail)}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon2"><i
                                        className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="**********"
                                       aria-label="password" aria-describedby="basic-addon2" value={password}
                                       onChange={handleChangeInput(setPassword)}/>
                            </div>
                            <div className="text-right">
                                <a href="#" onClick={changeForgotPasswordPopup} className="when-click-forgot-password">Forgot
                                    Password?</a>
                            </div>
                            <button type="submit" className="template-btn2 mt-5">Login <span>⇀</span></button>
                        </form>
                        <div className="login-bottom text-center">
                            <p>You don’t have an account? <a href="#" className="when-click-signup"
                                                             onClick={changeSignUpPopup}>Sign up</a></p>
                        </div>
                    </div>
                    <div className="signup-content">
                        <span className="cross-icon" onClick={closeAuthPopup}><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form action="#" onSubmit={handleRegister}>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user-o"/></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter Fullname"
                                       value={fullname}
                                       onChange={handleChangeInput(setFullname)}/>
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-envelope-o"/></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Enter Email" value={email}
                                       onChange={handleChangeInput(setEmail)}/>
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Create Password"
                                       value={password}
                                       onChange={handleChangeInput(setPassword)}/>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Confirm Password"
                                       value={confirmPassword}
                                       onChange={handleChangeInput(setConfirmPassword)}/>
                            </div>
                            <button type="submit" className="template-btn2 mt-3">Sign Up <span>⇀</span></button>
                        </form>
                        <div className="login-bottom text-center">
                            <p>You don’t have an account? <a href="#" onClick={changeSignInPopup}
                                                             className="when-click-login">Login </a></p>
                        </div>
                    </div>
                    <div className="forgot-password-content">
                        <span className="cross-icon" onClick={closeAuthPopup}><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Forgot Password</h2>
                        </div>
                        <form action="#" onClick={handleForgotPassword}>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3"><i
                                        className="fa fa-envelope-o"/></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Enter Email Address"
                                       aria-label="Username" aria-describedby="basic-addon1" value={email}
                                       onChange={handleChangeInput(email)}/>
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