import {Action} from "../../../models/reducer.model";
import {SET_AUTHENTICATE} from "./types";


export const UserReducer = (state, action: Action) => {
    const {logged_in, user_info} = action.payload
    switch (action.type) {

        case SET_AUTHENTICATE : {
            return {...state, logged_in, user_info}
        }
        default:
            return state
    }
}