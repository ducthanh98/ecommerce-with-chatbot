export interface Role {
    activate: boolean;
    description: string;
    id: number;
    name: string;
}

export interface FetchRoleResponse {
    roles: Role[];
}

export interface Permission {
    code: string;
    description?: any;
    id: number;
}

export interface FetchPermissionResponse {
    permissions: Permission[];
}