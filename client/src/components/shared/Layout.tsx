import styles from "../../../styles/Home.module.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Loading} from "./Loading";
import {useContext, useEffect} from "react";
import {StoreContext} from "../../utils/store/Store";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Menu} from "./Menu";
import {http} from "../../core/http";
import {SET_AUTHENTICATE} from "../../utils/store/reducers/user";

export const Layout = ({children, logged_in, user_info}) => {

    const {loading, user} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [userState, dispatchUser] = user

    useEffect(() => {
        const body = {type: SET_AUTHENTICATE, payload: {logged_in, user_info}}
        dispatchUser(body)

        setTimeout(() => {
            const payload = {type: SET_LOADING, payload: false}
            dispatchLoading(payload)
        }, 1000)

    }, [])


    return (
        <>
            {loadingState.loading ? <Loading/> : ''}
            <Header/>
            <Menu/>
            {children}
            <Footer/>
        </>

    )
}

Layout.getInitialProps = async ({req}) => {
    const {token} = req.cookies
    if (!token) {
        return {logged_in: false, user_info: {}}
    }

    return {logged_in: true, user_info: {}}
}