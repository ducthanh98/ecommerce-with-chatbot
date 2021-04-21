import {useEffect, useState} from "react";
import {http} from "../../core/http";
import {notification} from "antd";
import {useRouter} from "next/router";
import {FetchPermissionResponse} from "../../pages/admin/roles/model";

export const Category = () => {
    const router = useRouter()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        initState()
    }, [])

    const initState = async () => {
        const response = await http.get<FetchPermissionResponse>('category-api?activate=true')
        if (response.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: response.data
            });

        }
        const data = response.data
        setCategories(data.categories)
    }

    function onMouseOver(e) {
        $('.categories-area .single-item').removeClass('active');
        // console.log(e.offsetParent)
        e.target.offsetParent.classList.add('active')
    }

    const handRedirect = (id)=> router.push(`/products?category_id=${id}`)

    return (
        <section className="categories-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 pr-0">
                        <div className="section-title text-center">
                            <h2>Categories</h2>
                        </div>
                        <div
                            className="categories-item d-lg-flex justify-content-end">
                            {
                                categories.map(category => (
                                    <div className="single-item fadeIn" data-wow-duration=".8s" data-wow-delay=".4s"
                                         key={category.id} onMouseOver={onMouseOver} onClick={()=>handRedirect(category.id)}>
                                        <div className="item-image"
                                             style={{backgroundImage: `url("http://localhost:5000/images/${category.image}")`}}>
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="shop-page.html">Shop For {category.name}</a></h5>
                                            <a href="shop-page.html">{category.description}</a>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}