import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {CreateRoleResponse, FetchPermissionResponse, FetchRoleResponse, GetRoleResponse, Role} from "./model";

export const api = {
    fetchRoles: (payload) => {
        return http.get<FetchRoleResponse>(`permission-api/roles?${buildQueryString(payload)}`)
    },
    fetchUsers: (payload) => {
        return http.get<FetchRoleResponse>(`user-api?${buildQueryString(payload)}`)
    },
}