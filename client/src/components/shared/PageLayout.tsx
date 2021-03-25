import {Header as CustomerHeader} from "./customer/Header";
import {Footer} from "./customer/Footer";
import {Loading} from "./customer/Loading";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../utils/store/Store";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Menu} from "./customer/Menu";
import {SET_AUTHENTICATE} from "../../utils/store/reducers/user";
import {useRouter} from "next/router";
import {Layout, notification} from "antd";
import Navbar from "./admin/Navbar";
import AdminHeader from "./admin/Header"
import {http} from "../../core/http";
import {User} from "../../utils/models/User";

const PageLayout = ({children, token}) => {
    const {loading, user} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [userState, dispatchUser] = user
    const [isAdmin, setIsAdmin] = useState(false)
    const router = useRouter();


    useEffect(() => {
        init()

    }, [])


    const init = async () => {
        const payload = {type: SET_LOADING, payload: true}
        dispatchLoading(payload)

        const response = await http.get<User>(`user-api/current`)
        if (response.error) {
            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: response.data
            });
        }
        dispatchUser({type: SET_AUTHENTICATE, payload: {logged_in: true, user_info: response.data}})

        setTimeout(() => {
            const payload = {type: SET_LOADING, payload: false}
            dispatchLoading(payload)
        }, 1000)
    }


    useEffect(() => {
        if (router.asPath.includes('admin')) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
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

PageLayout.getInitialProps = ({req}) => {
    const {cookies} = req ? req : {}
    const {token} = cookies

    return {token}
}

export default PageLayout