export interface UserInfo {
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

export interface User {
    permissions: string[];
    user_info: UserInfo;
}