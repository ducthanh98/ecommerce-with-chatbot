import {useRouter} from 'next/router'

export const AdminActiveLink = ({children, href}) => {
    const router = useRouter()
    // const activeClassName = router.pathname === href ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children '

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    )
}

