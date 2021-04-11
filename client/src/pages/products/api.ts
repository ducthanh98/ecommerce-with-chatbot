import {http} from "../../core/http";

export const api = {
    getProduct: (id)=>{
        return http.get(`product-api/${id}`)
    }
}