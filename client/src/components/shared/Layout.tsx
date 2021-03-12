import styles from "../../../styles/Home.module.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Loading} from "./Loading";
import {useContext, useEffect} from "react";
import {StoreContext} from "../../utils/store/Store";
import {SET_LOADING} from "../../utils/store/reducers/loading";

export const Layout = ({children}) => {

    const {loading} = useContext(StoreContext)
    const [state, dispatch] = loading

    useEffect(() => {

        setTimeout(() => {
            const payload = {type: SET_LOADING, payload: false}
            dispatch(payload)
        }, 1000)

    }, [])

    return (
        <>
            {state.loading ? <Loading/> : ''}
            <Header/>
            {children}
            <Footer/>
        </>

    )
}