import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {FetchCategoriesResponse, FetchProductResponse} from "../products/model";

export const api = {
    fetchProducts: (payload) => {
        return http.get<FetchProductResponse>(`product-api?${buildQueryString(payload)}`)
    },
    fetchCategory: () => {
        return http.get<FetchCategoriesResponse>(`category-api`)
    },
    createProduct: (payload) => {
        return http.post(`product-api`, payload)
    },
    updateProduct: (payload,id) => {
        return http.put(`product-api/${id}`, payload)
    },
    getProduct: (id) => {
        return http.get(`product-api/${id}`)
    }
}