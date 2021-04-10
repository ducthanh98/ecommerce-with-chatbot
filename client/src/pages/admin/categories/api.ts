import {http} from "../../../core/http";

export const api = {
    fetchCategories: () => {
        return http.get(`category-api`)
    },
    createCategory: (payload) => {
        return http.post(`category-api`, payload)
    },
    updateCategory: (payload) => {
        return http.put(`category-api/${payload.id}`, payload)
    },
}