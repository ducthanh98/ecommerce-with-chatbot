import {http} from "../../../core/http";
import {buildQueryString} from "../../../core/utils/url";
import {FetchPermissionResponse, FetchRoleResponse} from "./model";

export const api = {
    fetchPermissions: () => {
        return http.get<FetchPermissionResponse>(`permission-api`)
    },
    fetchRoles: (payload) => {
        return http.get<FetchRoleResponse>(`permission-api/roles?${buildQueryString(payload)}`)
    }
}