import {Header as CustomerHeader} from "./customer/Header";
import {Footer} from "./customer/Footer";
import {Loading} from "./customer/Loading";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../utils/store/Store";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Menu} from "./customer/Menu";
import {SET_AUTHENTICATE} from "../../utils/store/reducers/user";
import {useRouter} from "next/router";
import {Layout} from "antd";
import Navbar from "./admin/Navbar";
import AdminHeader from "./admin/Header"

export const PageLayout = ({children, logged_in, user_info}) => {

    const {loading, user} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [userState, dispatchUser] = user
    const [isAdmin, setIsAdmin] = useState(false)
    const router = useRouter();


    useEffect(() => {
        const body = {type: SET_AUTHENTICATE, payload: {logged_in, user_info}}
        dispatchUser(body)

        setTimeout(() => {
            const payload = {type: SET_LOADING, payload: false}
            dispatchLoading(payload)
        }, 1000)

    }, [])


    useEffect(() => {
        if (router.asPath.includes('admin')) {
            setIsAdmin(true)
        }
    }, [router.asPath]);

    const renderCustomerTemplate = () => {
        return (
            <>
                {loadingState.loading ? <Loading/> : ''}
                <CustomerHeader/>
                <Menu/>
                {children}
                <Footer/>
            </>
        )
    }

    const renderAdminTemplate = () => {
        return (
            <>
                <CustomerHeader/>
                {loadingState.loading ? <Loading/> : ''}
                <Layout style={{height: "100%"}}>
                    <Navbar/>
                    <Layout>
                        <AdminHeader/>
                        <Layout.Content style={{margin: "20px", height: "100%"}}>
                            {children}
                        </Layout.Content>
                    </Layout>
                </Layout>
            </>
        )
    }

    return (
        <>
            {
                !isAdmin && renderCustomerTemplate()
            }
            {
                isAdmin && renderAdminTemplate()
            }
        </>

    )
}

PageLayout.getInitialProps = async ({req}) => {
    const {token} = req.cookies
    if (!token) {
        return {logged_in: false, user_info: {}}
    }

    return {logged_in: true, user_info: {}}
}