import {http} from "../../../core/http";
import {CreateRoleResponse, FetchPermissionResponse, FetchRoleResponse, GetRoleResponse, Role} from "./model";

export const api = {
    fetchCategories: () => {
        return http.get<FetchPermissionResponse>(`category-api`)
    },
    createProduct: (payload) => {
        return http.post<FetchPermissionResponse>(`product-api`, payload)
    },
    updateCategory: (payload) => {
        return http.put<FetchPermissionResponse>(`category-api/${payload.id}`, payload)
    },
}