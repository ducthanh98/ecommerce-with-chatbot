import {Action} from "../../../models/reducer.model";
import {SET_CART} from "./types";
import {setCookie} from "../../../../core/utils/cookieHelper";


export const CartReducer = (state, action: Action) => {
    const {cart} = action.payload
    switch (action.type) {

        case SET_CART : {
            setCookie("initCart", cart)
            return {...state, cart}
        }
        case SET_CART : {
            return {...state, cart}
        }
        default:
            return state
    }
}