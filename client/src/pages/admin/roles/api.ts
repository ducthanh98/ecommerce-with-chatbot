import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {CreateRoleResponse, FetchPermissionResponse, FetchRoleResponse} from "./model";

export const api = {
    fetchPermissions: () => {
        return http.get<FetchPermissionResponse>(`permission-api`)
    },
    fetchRoles: (payload) => {
        return http.get<FetchRoleResponse>(`permission-api/roles?${buildQueryString(payload)}`)
    },
    createRole: (payload) => {
        return http.post<CreateRoleResponse>(`permission-api/role`, payload)
    }
}