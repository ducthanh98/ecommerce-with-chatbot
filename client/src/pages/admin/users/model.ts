export interface Role {
    activate: boolean;
    description: string;
    id: number;
    name: string;
    role_permissions: Array<RolePermission>

}

export interface FetchRoleResponse {
    roles: Role[];
}

export interface GetRoleResponse {
    role: Role;
}

export interface Permission {
    code: string;
    description?: any;
    id: number;
}

export interface RolePermission {
    role_id: number
    permission_id: number
}

export interface CreateRoleResponse {
    success: boolean;
}

export interface FetchPermissionResponse {
    permissions: Permission[];
}

export interface User {
    activate: boolean;
    address: string;
    avatar: string;
    country: string;
    created_at: string;
    email: string;
    fullname: string;
    id: number;
    password: string;
    updated_at: string;
    zipcode: string;
}

export interface FetchUserResponse {
    count: number;
    users: User[];
}