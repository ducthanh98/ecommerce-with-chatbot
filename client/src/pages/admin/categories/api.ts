import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {CreateRoleResponse, FetchPermissionResponse, FetchRoleResponse, GetRoleResponse, Role} from "./model";

export const api = {
    fetchCategories: () => {
        return http.get<FetchPermissionResponse>(`category-api`)
    }
}