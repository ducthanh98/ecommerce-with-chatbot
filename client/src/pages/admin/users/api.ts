import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {
    CreateRoleResponse,
    FetchPermissionResponse,
    FetchRoleResponse,
    FetchUserResponse,
    GetRoleResponse, GetUserResponse,
    Role
} from "./model";

export const api = {
    fetchRoles: (payload) => {
        return http.get<FetchRoleResponse>(`permission-api/roles?${buildQueryString(payload)}`)
    },
    fetchUsers: (payload) => {
        return http.get<FetchUserResponse>(`user-api?${buildQueryString(payload)}`)
    },
    getUser: (id) => {
        return http.get<GetUserResponse>(`user-api/${id}`)
    },
    updateUser: (payload) => {
        return http.put<CreateRoleResponse>(`user-api/${payload.id}`, payload)
    }
}