import {http} from "../../core/http";
import {buildQueryString} from "../../core/utils/url";
import {FetchProductResponse} from "../admin/products/model";

export const api = {
    updatePassword: (payload) => {
        return http.put<any>(`user-api/password`, payload)
    },
    fetchOrders: (payload) => {
        return http.get<FetchProductResponse>(`order-api?${buildQueryString(payload)}`)
    },
    updateOrder: (order_id,payload) => {
        return http.put(`order-api/${order_id}`, payload)
    }
}