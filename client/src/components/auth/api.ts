import {http} from "../../core/http";
import {ForgotPasswordResponse, LoginResponse, RegisterResponse} from "./model";

export const api = {
    login: (payload) => {
        return http.post<LoginResponse>('auth-api/login', payload)
    },
    register: (payload) => {
        return http.post<RegisterResponse>('auth-api/register', payload)
    },
    forgotPassword: (payload) => {
        return http.post<ForgotPasswordResponse>('auth-api/forgot-password', payload)
    }
}