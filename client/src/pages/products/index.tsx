import {useContext, useEffect, useState} from "react";
import {initEvent} from "../../utils/script/main";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {handleUpdateRouteQuery} from "../../core/utils/url";
import {api} from "../admin/products/api";
import {Image, notification} from "antd";
import {FetchCategoriesResponse, FetchProductResponse} from "../admin/products/model";
import {StoreContext} from "../../utils/store/Store";
import {useRouter} from "next/router";

const Products = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [filter, setFilter] = useState({})
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [count, setCount] = useState(0)
    const router = useRouter()

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        handleUpdateRouteQuery(router, filter)
        await Promise.all([
            fetchCategory(),
            fetchProducts()
        ])
        initEvent();
        dispatchLoading({type: SET_LOADING, payload: false} as Action)
    }

    const fetchCategory = async () => {
        const result = await api.fetchCategory()

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as FetchCategoriesResponse
        setCategory(data.categories)
    }

    const fetchProducts = async () => {
        const result = await api.fetchProducts(filter)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as FetchProductResponse
        setProducts(data.products)
        setCount(data.count)
    }

    return (
        <>
            <section className="shop-banner section-padding-bottom2"></section>

            <section className="shop-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop-sidebar">
                                <form action="#">
                                    <input type="email" className="search-input" placeholder="Search" required/>
                                    <button type="submit" className="search-button"><i className="fa fa-search"/>
                                    </button>
                                </form>
                                <div className="categories">
                                    <div className="title">
                                        <h4>CATEGORIES</h4>
                                    </div>
                                    <ul>
                                        {
                                            category.map(x => (<li><a href="#">{x.name} </a></li>))
                                        }
                                    </ul>
                                </div>
                                <div className="price">
                                    <div className="title">
                                        <h4>PRICE</h4>
                                    </div>
                                    <ul>
                                        <li>All</li>
                                        <li>$0 - $20</li>
                                        <li>$20 - $60</li>
                                        <li>$60 - $100</li>
                                        <li>$100 - $150</li>
                                        <li>$150 - $200</li>
                                    </ul>
                                </div>
                                <div className="reset">
                                    <div className="title">
                                        <h4>RESET</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop-items-top d-flex justify-content-between">
                                <div className="left"><span>{count} Items</span></div>
                                <div className="dropdown">
                                    <button className="drop-btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort by
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Title</a>
                                        <a className="dropdown-item" href="#">Price</a>
                                        <a className="dropdown-item" href="#">Highest Selling</a>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="shop-items">*/}
                            {/*    <div className="row">*/}
                            {/*        <div className="col-lg-4 col-md-6">*/}
                            {/*            <div className="single-cart-item active">*/}
                            {/*                <div className="single-cart-image">*/}
                            {/*                    <img className="image-item-01 item-active"*/}
                            {/*                         src="img/home-1/pick/pick-1.png"/>*/}
                            {/*                    <img className="image-item-02" src="img/shop-page/item7.png"*/}
                            {/*                    />*/}
                            {/*                    <div className="image-dots">*/}
                            {/*                        <div className="dot-01"/>*/}
                            {/*                        <div className="dot-02 active"/>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                /!*<span className="love-icon"><i className="fa fa-heart"/></span>*!/*/}
                            {/*                <div className="single-cart-content">*/}
                            {/*                    <div className="cart-content-left">*/}
                            {/*                        <ul className="cart-rating">*/}
                            {/*                            <li><i className="fa fa-star"/></li>*/}
                            {/*                            <li><i className="fa fa-star"/></li>*/}
                            {/*                            <li><i className="fa fa-star"/></li>*/}
                            {/*                            <li><i className="fa fa-star"/></li>*/}
                            {/*                            <li className="diff-color"><i className="fa fa-star"/></li>*/}
                            {/*                        </ul>*/}
                            {/*                        <h5>Belted Chino Trousers</h5>*/}
                            {/*                        <ul className="cart-size">*/}
                            {/*                            <li><span>xs</span></li>*/}
                            {/*                            <li className="active"><span>s</span></li>*/}
                            {/*                            <li><span>m</span></li>*/}
                            {/*                            <li><span>l</span></li>*/}
                            {/*                            <li><span>xl</span></li>*/}
                            {/*                        </ul>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="cart-content-right">*/}
                            {/*                        <span className="current-price">$45.99</span>*/}
                            {/*                        <span className="old-price">$99.10</span>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {
                                products.map(product => (
                                    <div className="shop-items">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-cart-item active">
                                                    <div className="single-cart-image">
                                                        {
                                                            product.images.map(image => (<img className="image-item-01 item-active" src={`http://localhost:5000/images/${image}`}/>))
                                                        }
                                                        {/*<div className="image-dots">*/}
                                                        {/*    <div className="dot-01"/>*/}
                                                        {/*    <div className="dot-02 active"/>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                    {/*<span className="love-icon"><i className="fa fa-heart"/></span>*/}
                                                    <div className="single-cart-content">
                                                        <div className="cart-content-left">
                                                            <ul className="cart-rating">

                                                            </ul>
                                                            <h5>{product.name}</h5>
                                                        </div>
                                                        <div className="cart-content-right">
                                                            <span className="current-price">$45.99</span>
                                                            {/*<span className="old-price">$99.10</span>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
export default Products