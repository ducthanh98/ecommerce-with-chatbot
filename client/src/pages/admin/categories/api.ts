import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";

export const api = {
    fetchCategories: (payload) => {
        return http.get(`category-api?${buildQueryString(payload)}`)
    },
    createCategory: (payload) => {
        return http.post(`category-api`, payload)
    },
    updateCategory: (payload) => {
        return http.put(`category-api/${payload.id}`, payload)
    },
}