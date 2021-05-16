import {useContext, useEffect, useState} from "react";
import {SET_LOADING} from "../../utils/store/reducers/loading";
import {Action} from "../../utils/models/reducer.model";
import {initEvent} from "../../utils/script/main";
import {StoreContext} from "../../utils/store/Store";
import {useRouter} from "next/router";
import {api} from "./api";
import {notification} from "antd";
import {CartItem, GetProductResponse, Product, ProductVariant} from "./model";
import {SET_CART} from "../../utils/store/reducers/cart";

const ProductDetail = () => {
    const {loading, cart} = useContext(StoreContext)
    const [loadingState, dispatchLoading] = loading
    const [cartState, dispatchCart] = cart
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
        $("body").addClass("cart-page shop-page common-typography")
        init()
        return () => {
            $("body").removeClass("cart-page shop-page common-typography")
        }
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

    const handleAddToCart = () => {
        if (!variant.id) {
            return notification.error({
                message: 'Fashion and Clothing Shop',
                placement: 'topLeft',
                className: 'custom-notification-antd',
                description: "Please choose an attribute"
            });
        }
        const arr = [...cartState.cart]
        let item = arr.find(item => item.product_variant_id == variant.id)
        if (!item) {
            item = {
                product_variant_id: variant.id,
                price: variant.price,
                name: variant.name,
                quantity: quantity,
                image: product.images[0]
            }
            arr.push(item)
        } else {
            item.quantity += quantity
        }
        dispatchCart({type: SET_CART, payload: {cart: arr}})

        $('.cart-popup').addClass('active');
        $('.body-overlay').addClass('active');
        $('.floating-icon').addClass('active');

        $('.live-chat-popup').removeClass('active');
        $('.login-popup').removeClass('active');

    }

    return (
        <>
            <div>
                {
                    product.id && <section className="cart-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 align-self-end order-2 order-lg-1">
                                    <div className="cart-banner-left">
                                        <div className="left-title mb-5">
                                            <h3>{product.category.name}</h3>
                                            <h4>{variant.id ? variant.name : product.name}</h4>
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
                                                                <li className={id === attribute[`attribute${idx + 1}_id`] ? 'active' : ''}
                                                                    onClick={() => handleSelectAttribute(idx + 1, id)}
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
                                                product.images.map((image, i) => (
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
                                            <span href="#" className="template-btn2 on2" onClick={handleAddToCart}>Add To
                                                Cart <span>⇀</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>

        </>
    )

}

export default ProductDetail;