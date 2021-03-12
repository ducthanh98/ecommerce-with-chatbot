import {http} from "../../core/http";

export const api = {
    login: <T>(payload) => {
        return http.post<T>('/login', payload)
    }
}