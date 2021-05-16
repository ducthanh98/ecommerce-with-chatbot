import {useContext, useEffect, useState} from "react";
import {initEvent} from "../../utils/script/main";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {getRouteQuery, handleUpdateRouteQuery} from "../../core/utils/url";
import {api} from "../admin/products/api";
import {notification} from "antd";
import {FetchCategoriesResponse, FetchProductResponse} from "../admin/products/model";
import {StoreContext} from "../../utils/store/Store";
import {useRouter} from "next/router";
import debounce from "../../core/utils/debounce";

const Products = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [filter, setFilter] = useState({} as any)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [count, setCount] = useState(0)
    const router = useRouter()

    useEffect(() => {
        $("body").addClass("shop-page shop-page common-typography")
        setFilter(getRouteQuery(filter, router))
        return () => {
            $("body").removeClass("shop-page common-typography")
        }
    }, [])

    useEffect(() => {
        if (Object.keys(filter).length < 1) return
        setTimeout(init, 0)
    }, [filter])

    const init = async () => {
        handleUpdateRouteQuery(router, filter)
        await Promise.all([
            fetchCategory(),
            fetchProducts()
        ])
        initEvent();
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
        const products = data.products
        for (let i = 0; i < products.length; i++) {
            products[i].min = 99999999999
            products[i].max = 0

            const variants = products[i].product_variants

            for (let j = 0; j < variants.length; j++) {

                if (products[i].min > variants[j].price) {
                    products[i].min = variants[j].price
                }
                if (products[i].max < variants[j].price) {
                    products[i].max = variants[j].price
                }

            }
        }


        setProducts(data.products)
        setCount(data.count)
    }

    const handleReset = () => {
        const tmp = {...filter}
        tmp.page = 1
        tmp.limit = 20
        tmp.name = ''
        tmp.price_from = ''
        tmp.price_to = ''
        tmp.category_id = ''
        setFilter(tmp)
    }

    const updateFilter = (value) => {
        const tmp = {...filter, ...value}
        setFilter(tmp)
    }

    const handleShowDetail = (id) => {
        router.push(`/products/${id}`)
    }

    const handleChangeSearch = (e) => debounce(() => {
        e.preventDefault()
        updateFilter({name: e.target.value})
    }, 500)()

    const removePriceFilter = () => {
        const data = {...filter}
        data.price_from = ''
        data.price_to = ''
        setFilter(data)
    }


    return (
        <>
            <section className="shop-banner section-padding-bottom2"></section>

            <section className="shop-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop-sidebar">
                                <form>
                                    <input type="text" onChange={handleChangeSearch} className="search-input"
                                           placeholder="Search" required/>
                                    <button type="submit" className="search-button"><i className="fa fa-search"/>
                                    </button>
                                </form>
                                <div className="categories">
                                    <div className="title">
                                        <h4>CATEGORIES</h4>
                                    </div>
                                    <ul>
                                        {
                                            category.map(x => (<li key={x.id} onClick={() => {
                                                updateFilter({category_id: x.id})
                                            }}><a style={filter.category_id == x.id ? {color: '#40a9ff'} : {}}
                                                  href="#">{x.name} </a></li>))
                                        }
                                    </ul>
                                </div>
                                <div className="price">
                                    <div className="title">
                                        <h4>PRICE</h4>
                                    </div>
                                    <ul>
                                        <li onClick={removePriceFilter}
                                            style={!filter.price_from && !filter.price_to ? {color: '#40a9ff'} : {}}>All
                                        </li>
                                        <li style={!filter.price_from && filter.price_to == 20 ? {color: '#40a9ff'} : {}}
                                            onClick={() => updateFilter({price_from: '', price_to: 20})}>$0 - $20
                                        </li>
                                        <li style={filter.price_from == 20 && filter.price_to == 60 ? {color: '#40a9ff'} : {}}
                                            onClick={() => updateFilter({price_from: 20, price_to: 60})}>$20 - $60
                                        </li>
                                        <li style={filter.price_from == 60 && filter.price_to == 100 ? {color: '#40a9ff'} : {}}
                                            onClick={() => updateFilter({price_from: 60, price_to: 100})}>$60 - $100
                                        </li>
                                        <li style={filter.price_from == 100 && filter.price_to == 150 ? {color: '#40a9ff'} : {}}
                                            onClick={() => updateFilter({price_from: 100, price_to: 150})}>$100 - $150
                                        </li>
                                        <li style={filter.price_from == 150 && filter.price_to == 200 ? {color: '#40a9ff'} : {}}
                                            onClick={() => updateFilter({price_from: 150, price_to: 200})}>$150 - $200
                                        </li>
                                    </ul>
                                </div>
                                <div className="reset">
                                    <div className="title cursor-pointer" onClick={handleReset}>
                                        <h4>RESET</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop-items-top d-flex justify-content-between">
                                <div className="left"><span>{count} Items</span></div>
                            </div>
                            <div className="shop-items">
                                <div className="row">
                                    {
                                        products.map(product => (
                                            <div key={product.id} onClick={() => handleShowDetail(product.id)}
                                                 className="col-lg-4 col-md-6">
                                                <div className="single-cart-item active">
                                                    <div className="single-cart-image">
                                                        {
                                                            product.images.map(image => (
                                                                <img key={image} className="image-item-01 item-active"
                                                                     src={`http://localhost:5000/images/${image}`}/>))
                                                        }
                                                    </div>
                                                    {/*<span className="love-icon"><i className="fa fa-heart"/></span>*/}
                                                    <div className="single-cart-content">
                                                        <div className="cart-content-left">
                                                            <ul className="cart-rating">

                                                            </ul>
                                                            <h5>{product.name}</h5>
                                                        </div>
                                                        <div className="cart-content-right">
                                                            {
                                                                product.min === product.max ?
                                                                    <span
                                                                        className="current-price">${product.min}</span> :
                                                                    <span
                                                                        className="current-price">${product.min} - ${product.max}</span>
                                                            }
                                                            {/*<span className="old-price">$99.10</span>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
export default Products