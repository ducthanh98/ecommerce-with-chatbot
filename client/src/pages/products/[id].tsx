import {useContext, useEffect, useState} from "react";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {initEvent} from "../../utils/script/main";
import {StoreContext} from "../../utils/store/Store";
import {useRouter} from "next/router";
import {api} from "./api";
import {notification} from "antd";
import {GetProductResponse, Product, ProductVariant} from "./model";

const ProductDetail = () => {
    const {loading} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [product, setProduct] = useState({} as Product)
    const [variant, setVariant] = useState({} as ProductVariant)
    const router = useRouter()
    const {id} = router.query
    const [quantity, setQuantity] = useState(1);
    const [attribute, setAttribute] = useState({attribute1_id: null, attribute2_id: null, attribute3_id: null})

    useEffect(() => {
        if (!product.id) return
        const variants = product.product_variants
        for (let i = 0; i < variants.length; i++) {
            if (variants[i].attribute1_id == attribute.attribute1_id &&
                variants[i].attribute2_id == attribute.attribute2_id &&
                variants[i].attribute3_id == attribute.attribute3_id) {
                return setVariant(variants[i])
            }
        }
        return setVariant({} as ProductVariant)

    }, [attribute])

    useEffect(() => {
        console.log(variant)

    }, [variant])

    useEffect(() => {
        init()
    }, [])


    const getProduct = async () => {
        const result = await api.getProduct(id)

        if (result.error) {

            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: result.data
            });

        }
        const data = result.data as GetProductResponse
        data.product.min = 99999999999
        data.product.max = 0
        data.product.product_variants.forEach((item) => {
            if (data.product.min > item.price) {
                data.product.min = item.price
            }
            if (data.product.max < item.price) {
                data.product.max = item.price
            }
        })

        setProduct(data.product)
    }

    const init = async () => {
        dispatchLoading({type: SET_LOADING, payload: true} as Action)
        await getProduct()
        setTimeout(initEvent, 0)
        dispatchLoading({type: SET_LOADING, payload: false} as Action)
    }

    const handleSelectAttribute = (idx, value) => {
        const tmp = {...attribute}
        tmp[`attribute${idx}_id`] = value
        setAttribute(tmp)
    }

    return (
        <>
            <div>
                <div className="cart-popup" id="cart-popup">
                    <div className="cart-content">
                        <span className="cross-icon"><i className="lnr lnr-cross"/></span>
                        <div className="cart-title text-center">
                            <h2>Cart</h2>
                            <h6 className="text-right">3 Items</h6>
                        </div>
                        <div className="cart-items">
                            <div className="single-item-function-1">
                                <div className="single-item d-flex justify-content-between mb-4">
                                    <div className="item-left d-flex">
                                        <div className="item-image image-1"/>
                                        <div className="item-name align-self-center">
                                            <h6>Pink Dress</h6>
                                        </div>
                                    </div>
                                    <div className="item-right d-flex align-items-center">
                                        <div className="item-price">
                                            <h6>$ 13</h6>
                                        </div>
                                        <div className="item-icon trash-icon-1">
                                            <i className="fa fa-trash-o"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item-function-2">
                                <div className="single-item d-flex justify-content-between mb-4">
                                    <div className="item-left d-flex">
                                        <div className="item-image image-2"/>
                                        <div className="item-name align-self-center">
                                            <h6>Black Heel</h6>
                                        </div>
                                    </div>
                                    <div className="item-right d-flex align-items-center">
                                        <div className="item-price">
                                            <h6>$ 13</h6>
                                        </div>
                                        <div className="item-icon trash-icon-2">
                                            <i className="fa fa-trash-o"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item-function-3">
                                <div className="single-item d-flex justify-content-between">
                                    <div className="item-left d-flex">
                                        <div className="item-image image-3"/>
                                        <div className="item-name align-self-center">
                                            <h6>Brown Bag</h6>
                                        </div>
                                    </div>
                                    <div className="item-right d-flex align-items-center">
                                        <div className="item-price">
                                            <h6>$ 13</h6>
                                        </div>
                                        <div className="item-icon trash-icon-3">
                                            <i className="fa fa-trash-o"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total-price text-right">
                            <h4>Total</h4>
                            <h3>$ 158,00</h3>
                        </div>
                        <div className="cart-buttons mt-4 mt-xl-5">
                            <a href="#" className="template-btn2 off2 mb-4">View Cart <span>⇀</span></a>
                            <a href="#" className="template-btn2 off1">Checkout <span>⇀</span></a>
                        </div>
                    </div>
                </div>
                {
                    product.id && <section className="cart-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 align-self-end order-2 order-lg-1">
                                    <div className="cart-banner-left">
                                        <div className="left-title mb-5">
                                            <h3>{product.category.name}</h3>
                                            <h4>{product.name}</h4>
                                        </div>
                                        <div className="price mb-5">
                                            {
                                                variant.id ?
                                                    <h2>${variant.price}</h2> :
                                                    <h2>{product.min === product.max ? `$${product.min}` : `$${product.min} - $${product.max}`}</h2>
                                            }
                                        </div>
                                        {
                                            product.product_attributes.map((product_attribute, idx) => (
                                                <div className="size mb-5" key={product_attribute.name}>
                                                    <h4>Select Your {product_attribute.name}</h4>
                                                    <ul>
                                                        {
                                                            product_attribute.values.map(({value, id}) => (
                                                                <li className={id === attribute[`attribute${idx+1}_id`] ? 'active' : ''} onClick={() => handleSelectAttribute(idx + 1, id)}
                                                                    key={value}><span>{value}</span></li>))
                                                        }
                                                    </ul>
                                                </div>

                                            ))
                                        }
                                        <div className="quantity mb-5">
                                            <h4>Quantity</h4>
                                            <ul>
                                                <li onClick={() => quantity > 1 && setQuantity(quantity - 1)}><span><i
                                                    className="ti-minus"/></span></li>
                                                <li><span>{quantity}</span></li>
                                                <li onClick={() => setQuantity(quantity + 1)}><span><i
                                                    className="ti-plus"/></span></li>
                                            </ul>
                                        </div>
                                        <div className="left-image d-flex small-slider">
                                            {
                                                product.images.map((image,i) => (
                                                    <div key={i} className="image mr-4"
                                                         style={{backgroundImage: `url("http://localhost:5000/images/${image}")`}}>
                                                        <div className="hover-state">
                                                            <a href={`http://localhost:5000/images/${image}`}><i
                                                                className="fa fa-search"/></a>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2">
                                    <div className="banner-image big-slider">
                                        <div className="cart-page-banner-bg"
                                             style={{backgroundImage: `url("http://localhost:5000/images/${product.images[0]}")`}}/>
                                    </div>
                                </div>
                                <div className="col-lg-5 align-self-center order-3">
                                    <div className="banner-right mb-5">
                                        <div className="right-top">
                                            <h6>{product.name}</h6>
                                            <p className="mt-4"
                                               dangerouslySetInnerHTML={{__html: product.description}}></p>
                                        </div>
                                        <div className="right-button mt-40">
                                            <a href="#" className="template-btn2 on2">Add To Cart <span>⇀</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <section className="related-section section-padding-top3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Related</h2>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-9">
                                <div className="related-slider owl-carousel">
                                    <div className="single-slide">
                                        <div className="single-cart-item active">
                                            <div className="single-cart-image">
                                                <img className="image-item-01 item-active"
                                                     src="/img/home-1/pick/pick-1.png" alt=""/>
                                                <img className="image-item-02" src="/img/shop-page/item7.png"
                                                     alt=""/>
                                                <div className="image-dots">
                                                    <div className="dot-01"/>
                                                    <div className="dot-02 active"/>
                                                </div>
                                            </div>
                                            <span className="love-icon"><i className="fa fa-heart"/></span>
                                            <div className="single-cart-content">
                                                <div className="cart-content-left">
                                                    <ul className="cart-rating">
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li className="diff-color"><i className="fa fa-star"/></li>
                                                    </ul>
                                                    <h5>Belted Chino Trousers</h5>
                                                    <ul className="cart-size">
                                                        <li><span>xs</span></li>
                                                        <li className="active"><span>s</span></li>
                                                        <li><span>m</span></li>
                                                        <li><span>l</span></li>
                                                        <li><span>xl</span></li>
                                                    </ul>
                                                </div>
                                                <div className="cart-content-right">
                                                    <span className="current-price">$45.99</span>
                                                    <span className="old-price">$99.10</span>
                                                </div>
                                            </div>
                                            <div className="single-cart-button">
                                                <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                                <a href="#" className="compare-button">compare</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single-cart-item">
                                            <div className="single-cart-image">
                                                <img className="image-item-01 item-active"
                                                     src="/img/home-1/pick/pick-2.jpg" alt=""/>
                                                <img className="image-item-02" src="/img/shop-page/item7.png"
                                                     alt=""/>
                                                <div className="image-dots">
                                                    <div className="dot-01"/>
                                                    <div className="dot-02 active"/>
                                                </div>
                                            </div>
                                            <span className="love-icon"><i className="fa fa-heart"/></span>
                                            <div className="single-cart-content">
                                                <div className="cart-content-left">
                                                    <ul className="cart-rating">
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li className="diff-color"><i className="fa fa-star"/></li>
                                                    </ul>
                                                    <h5>Belted Chino Trousers</h5>
                                                    <ul className="cart-size">
                                                        <li><span>xs</span></li>
                                                        <li className="active"><span>s</span></li>
                                                        <li><span>m</span></li>
                                                        <li><span>l</span></li>
                                                        <li><span>xl</span></li>
                                                    </ul>
                                                </div>
                                                <div className="cart-content-right">
                                                    <span className="current-price">$45.99</span>
                                                    <span className="old-price">$99.10</span>
                                                </div>
                                            </div>
                                            <div className="single-cart-button">
                                                <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                                <a href="#" className="compare-button">compare</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single-cart-item">
                                            <div className="single-cart-image">
                                                <img className="image-item-01 item-active"
                                                     src="/img/home-1/pick/pick-3.jpg" alt=""/>
                                                <img className="image-item-02" src="/img/shop-page/item7.png"
                                                     alt=""/>
                                                <div className="image-dots">
                                                    <div className="dot-01"/>
                                                    <div className="dot-02 active"/>
                                                </div>
                                            </div>
                                            <span className="love-icon"><i className="fa fa-heart"/></span>
                                            <div className="single-cart-content">
                                                <div className="cart-content-left">
                                                    <ul className="cart-rating">
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li className="diff-color"><i className="fa fa-star"/></li>
                                                    </ul>
                                                    <h5>Belted Chino Trousers</h5>
                                                    <ul className="cart-size">
                                                        <li><span>xs</span></li>
                                                        <li className="active"><span>s</span></li>
                                                        <li><span>m</span></li>
                                                        <li><span>l</span></li>
                                                        <li><span>xl</span></li>
                                                    </ul>
                                                </div>
                                                <div className="cart-content-right">
                                                    <span className="current-price">$45.99</span>
                                                    <span className="old-price">$99.10</span>
                                                </div>
                                            </div>
                                            <div className="single-cart-button">
                                                <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                                <a href="#" className="compare-button">compare</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single-cart-item">
                                            <div className="single-cart-image">
                                                <img className="image-item-01 item-active"
                                                     src="/img/home-1/pick/pick-4.png" alt=""/>
                                                <img className="image-item-02" src="/img/shop-page/item7.png"
                                                     alt=""/>
                                                <div className="image-dots">
                                                    <div className="dot-01"/>
                                                    <div className="dot-02 active"/>
                                                </div>
                                            </div>
                                            <span className="love-icon"><i className="fa fa-heart"/></span>
                                            <div className="single-cart-content">
                                                <div className="cart-content-left">
                                                    <ul className="cart-rating">
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li><i className="fa fa-star"/></li>
                                                        <li className="diff-color"><i className="fa fa-star"/></li>
                                                    </ul>
                                                    <h5>Belted Chino Trousers</h5>
                                                    <ul className="cart-size">
                                                        <li><span>xs</span></li>
                                                        <li className="active"><span>s</span></li>
                                                        <li><span>m</span></li>
                                                        <li><span>l</span></li>
                                                        <li><span>xl</span></li>
                                                    </ul>
                                                </div>
                                                <div className="cart-content-right">
                                                    <span className="current-price">$45.99</span>
                                                    <span className="old-price">$99.10</span>
                                                </div>
                                            </div>
                                            <div className="single-cart-button">
                                                <a href="#" className="cart-button floating-icon-1">add to cart</a>
                                                <a href="#" className="compare-button">compare</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )

}

export default ProductDetail;