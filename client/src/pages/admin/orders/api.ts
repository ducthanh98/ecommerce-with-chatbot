import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {FetchCategoriesResponse, FetchProductResponse} from "../products/model";

export const api = {
    fetchOrders: (payload) => {
        return http.get<FetchProductResponse>(`order-api?${buildQueryString(payload)}`)
    }
}