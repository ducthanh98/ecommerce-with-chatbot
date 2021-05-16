import {createContext, useReducer, useState} from "react";
import {LoadingReducer, state as loadingState} from "./reducers/loading"
import {UserReducer, state as userState} from "./reducers/user"
import {CartReducer, state as cartState} from "./reducers/cart"


export const StoreContext = createContext(null);

export default ({children}) => {

    const [loading, dispatchLoading] = useReducer(LoadingReducer, loadingState);
    const [user, dispatchUser] = useReducer(UserReducer, userState);
    const [cart, dispatchCart] = useReducer(CartReducer, cartState);

    const store = {
        loading: [loading, dispatchLoading],
        user: [user, dispatchUser],
        cart: [cart, dispatchCart]
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};