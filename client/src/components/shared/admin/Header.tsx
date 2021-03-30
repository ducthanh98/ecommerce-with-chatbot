import {Layout, Avatar} from "antd";
import React, {useContext} from "react";
import {StoreContext} from "../../../utils/store/Store";

const {Header} = Layout;

const styles = {
    avatar: {
        marginRight: '20px'
    },
    username: {
        marginRight: '10px',
        marginLeft: '10px',
        fontFamily: 'Roboto, sans-serif',
        color: '#032A47',
        fontWeight: '500'
    },
    headerWrap: {
        backgroundColor: '#fff',
        padding: 0,
        textAlign: 'end',
        borderBottom: '1px solid #C2C2C229'
    },
    notifyWrap: {
        width: '300px',
        maxHeight: '360px',
        overflowY: 'scroll',
        position: 'relative'
    },
    notiHeader: {
        fontWeight: 'bold',
        fontSize: '15px',
    },
    notiContent: {
        fontWeight: 'bold',
        color: '##171717',
        fontSize: '13px'
    },
    notiTime: {
        color: '#8E8E8E',
        fontSize: '12px'
    },
    notiFooter: {
        textDecoration: 'underline',
        textAlign: 'center',
        cursor: 'pointer'
    }

}
const CustomHeader = (props) => {
    const {user} = useContext(StoreContext)
    const [userState, dispatchUser] = user
    // @ts-ignore
    return (
        <Header style={styles.headerWrap}>

            <span style={styles.username}>{userState?.user_info?.user_info?.email}</span>
            <Avatar style={styles.avatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>

        </Header>
    );
}


export default CustomHeader;
