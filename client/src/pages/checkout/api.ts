import {http} from "../../core/http";

export const api = {
    createOrder: (payload) => {
        return http.post(`order-api`, payload)
    }
}