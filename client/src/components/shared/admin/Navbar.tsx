import React, {useContext, useEffect, useState} from 'react';
import {Menu, Layout} from "antd";
import {ContainerTwoTone} from '@ant-design/icons'
import {AdminActiveLink} from './Router'
import {StoreContext} from "../../../utils/store/Store";

const {Sider} = Layout;

const styles = {
    logo: {
        fontFamily: 'Lobster, cursive',
        color: '#ffff',
        height: '44px',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '20px',
        borderBottom: '1px solid #032A47'
    },
    rectangle: {
        position: 'absolute',
        left: 0,
        bottom: 20,
        width: '200px',
        height: '80px',
        backgroundImage: `url('images/Rectangle 813.png')!important`,
    }
}

const Navbar = () => {
    const {user} = useContext(StoreContext)
    const [userState, dispatchUser] = user

    const [force, setForce] = useState(false)
    useEffect(() => {
        setForce(false)
        setTimeout(() => {
            setForce(true)
        })
    }, [userState])


    const checkPermission = (codes: string[]) => {
        const permissions = userState.user_info.permissions ? userState.user_info.permissions : []

        for (let i = 0; i < codes.length; i++) {
            if (permissions.includes(codes[i])) {
                return true
            }
        }
        return false
    }

    const logout = () => {

    }

    return (
        <>
            {
                force && <Sider>
                    <div style={styles.logo}>
                        <ContainerTwoTone style={{paddingRight: '10px'}}/>
                        Shop
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            checkPermission(['GET_USER', 'POST_USER', 'UPDATE_USER']) &&
                            <Menu.Item key="1">
                                <AdminActiveLink href={'/admin/users'}>
                                    <img src='/images/post_add-24px.svg' alt={'User'}/> &nbsp;
                                    <span>User</span>
                                </AdminActiveLink>

                            </Menu.Item>
                        }
                        {
                            checkPermission(['GET_ROLE', 'CREATE_ROLE', 'UPDATE_ROLE']) &&
                            <Menu.Item key="2">
                                <AdminActiveLink href={'/admin/roles'}>
                                    <img src='/images/post_add-24px.svg' alt={'Role'}/> &nbsp;
                                    <span>Role</span>
                                </AdminActiveLink>
                            </Menu.Item>
                        }
                        {
                            checkPermission(['CREATE_CATEGORY', 'UPDATE_CATEGORY']) &&
                            <Menu.Item key="3">
                                <AdminActiveLink href={'/admin/categories'}>
                                    <img src='/images/post_add-24px.svg' alt={'Categories'}/> &nbsp;
                                    <span>Categories</span>
                                </AdminActiveLink>
                            </Menu.Item>
                        }
                        <Menu.Item key="5">
                            {/*<Link to={'/login'} onClick={logout}>*/}
                            <img src='/images/power_settings_new-24px.svg' alt={'logout'}/> &nbsp;
                            <span>Đăng xuất</span>
                            {/*</Link>*/}
                        </Menu.Item>
                    </Menu>
                    <img style={styles.rectangle} src='/images/Rectangle 813.png' alt='rectangle'/>
                </Sider>
            }

        </>


    );

}

export default Navbar;
