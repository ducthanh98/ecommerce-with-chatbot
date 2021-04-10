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
}