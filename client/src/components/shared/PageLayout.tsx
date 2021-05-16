import {Header as CustomerHeader} from "./customer/Header";
import {Footer} from "./customer/Footer";
import {Loading} from "./customer/Loading";
import {useContext, useEffect, useMemo, useState} from "react";
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
import {SET_CART} from "../../utils/store/reducers/cart";

const PageLayout = ({children, token, initCart}) => {
    const {loading, user, cart} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [cartState, dispatchCart] = cart
    const [userState, dispatchUser] = user
    const [isAdmin, setIsAdmin] = useState(true)
    const router = useRouter();
    const [isGetUser, setIsGetUser] = useState(true)

    useMemo(() => {
        if (router.asPath.includes('admin')) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }, [])


    useEffect(() => {
        if (router.asPath.includes('admin')) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }, [router.asPath]);

    useEffect(() => {
        dispatchCart({type: SET_CART, payload: {cart: initCart}})
        init()
    }, [])


    const init = async () => {
        if (!token && router.asPath.includes('admin')) {
            setIsGetUser(false)
            return router.push('/')
        } else if (!token) {
            return setIsGetUser(false)
        }

        let payload = {type: SET_LOADING, payload: true}
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
        const data = response.data as User

        dispatchUser({type: SET_AUTHENTICATE, payload: {logged_in: true, user_info: response.data}})

        payload = {type: SET_LOADING, payload: false}
        dispatchLoading(payload)
        if (data.permissions.length < 1) {
            await router.push('/')
        }
        setIsGetUser(false)

    }

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
                <Layout style={{minHeight: "100vh", overflow: "auto"}}>
                    <Navbar/>
                    <Layout>
                        <AdminHeader/>
                        <Layout.Content style={{margin: "20px", minHeight: "100vh"}}>
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
                !isGetUser &&
                (
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
        </>

    )
}

PageLayout.getInitialProps = (
    {
        req
    }
) => {
    const {cookies} = req ? req : {}
    let {token, initCart} = {...cookies}
    if (!initCart || initCart == "undefined") {
        initCart = []
    } else if (typeof initCart == "string"){
        initCart = JSON.parse(initCart)
    }

    return {token, initCart}
}

export default PageLayout