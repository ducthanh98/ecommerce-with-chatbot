import {storage} from '../storage';
import {Messages} from './notification';
import {IResponse} from "../../utils/models/Response";

function fetchWithTimeOut(promise: Promise<Response>, ms = 5000) {
    return new Promise<Response>((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(Messages.Cant_connect_internet));
        }, ms);
        promise.then(resolve, reject);
    });
}

const commonCall = async <T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
    data: any,
    headers: Headers | null,
    type: 'json' | 'blob',
) => {
    const result: IResponse<T> = {data: null, error: true}

    try {
        const endpoint = url.includes('http')
            ? url
            : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`;

        const options: RequestInit = {
            method: method,
            mode: 'cors',
            headers: Object.assign({Accept: 'application/json', 'Content-Type': 'application/json'}, headers || {}),
        };

        const token = await storage.get('token');
        if (token) {
            options.headers = Object.assign(options.headers, {Authorization: `Bearer ${token}`});
        }

        if (data instanceof FormData || data instanceof ArrayBuffer) {
            options.body = data;
        } else if (data) {
            options.body = JSON.stringify(data);
        }
        let response = await fetchWithTimeOut(fetch(endpoint, options));

        if (response.status === 401) {
            storage.clear();
            result.data = Messages.error_401
            setTimeout(() => {
                window.location.reload();
            }, 3000);

            return result
        }

        if (response.status === 502) {
            result.data = Messages.error_500
            return result;
        }

        let payload;

        if (type === 'blob') {

            payload = await response.blob();
            result.error = false
            result.data = payload

        } else {

            payload = await response.json();

            if (!payload.error) {
                result.error = false
                result.data = payload
            } else {
                result.error = true
                result.data = payload.error
            }

        }

        return result
    } catch (error) {
        console.error(error)

        result.data = Messages.error_500
        return result;
    }
};

const http = {
    get: <T>(url: string, header: Headers | null = null, type: 'json' | 'blob' = 'json') => {
        return commonCall<T>(url, 'GET', null, header, type);
    },
    post: <T>(url: string, data: any, header: Headers | null = null, type: 'json' | 'blob' = 'json') => {
        return commonCall<T>(url, 'POST', data, header, type);
    },

    put: <T>(url: string, data: any, header: Headers | null = null, type: 'json' | 'blob' = 'json') => {
        return commonCall<T>(url, 'PUT', data, header, type);
    },
    delete: <T>(url: string, header: Headers | null = null, type: 'json' | 'blob' = 'json') => {
        return commonCall<T>(url, 'DELETE', null, header, type);
    },
};

export {http};
