import {Action} from "../../../models/reducer.model";
import {SET_LOADING} from "./index";


export const LoadingReducer = (state, action: Action) => {
    switch (action.type) {

        case SET_LOADING : {
            return {...state, loading: action.payload}
            break
        }
        default:
            return state
    }
}