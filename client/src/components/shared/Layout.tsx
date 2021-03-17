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

export const Layout = ({children}) => {

    const {loading, user} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [userState, dispatchUser] = user

    useEffect(() => {

        setTimeout(() => {
            const payload = {type: SET_LOADING, payload: false}
            dispatchLoading(payload)
        }, 1000)

    }, [])

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        const result = await http.get('http://localhost:3000/api/authenticate')
        const body = {type: SET_AUTHENTICATE, payload: result.data}
        dispatchUser(body)
    }

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