import {Layout, Avatar} from "antd";
import React from "react";

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

    // @ts-ignore
    return (
        <Header style={styles.headerWrap}>
            {/*<Dropdown overlay={renderMenu}*/}
            {/*          trigger={['click']}*/}
            {/*          onVisibleChange={(e)=>{*/}
            {/*              setTimeout(()=>addEventListener(e))*/}
            {/*          }}>*/}
            {/*    <Badge count={1} className="ant-dropdown-link">*/}
            {/*        <BellTwoTone style={{fontSize:24}}/>*/}
            {/*    </Badge>*/}
            {/*</Dropdown>*/}

            <span style={styles.username}>ThanhLD</span>
            <Avatar style={styles.avatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>

        </Header>
    );
}


export default CustomHeader;
