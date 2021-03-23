import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {CreateRoleResponse, FetchPermissionResponse, FetchRoleResponse, GetRoleResponse, Role} from "./model";

export const api = {
    fetchPermissions: () => {
        return http.get<FetchPermissionResponse>(`permission-api`)
    },
    fetchRoles: (payload) => {
        return http.get<FetchRoleResponse>(`permission-api/roles?${buildQueryString(payload)}`)
    },
    getRole: (id) => {
        return http.get<GetRoleResponse>(`permission-api/roles/${id}`)
    },
    createRole: (payload) => {
        return http.post<CreateRoleResponse>(`permission-api/role`, payload)
    },
    updateRole: (payload) => {
        return http.put<CreateRoleResponse>(`permission-api/roles/${payload.id}`, payload)
    }
}