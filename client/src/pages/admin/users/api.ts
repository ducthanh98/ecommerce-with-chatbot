import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {
    CreateRoleResponse,
    FetchPermissionResponse,
    FetchRoleResponse,
    FetchUserResponse,
    GetRoleResponse,
    Role
} from "./model";

export const api = {
    fetchRoles: (payload) => {
        return http.get<FetchRoleResponse>(`permission-api/roles?${buildQueryString(payload)}`)
    },
    fetchUsers: (payload) => {
        console.log(buildQueryString(payload),payload)
        return http.get<FetchUserResponse>(`user-api?${buildQueryString(payload)}`)
    },
}