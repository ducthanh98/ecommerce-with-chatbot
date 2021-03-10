import {createContext, useReducer, useState} from "react";
import {LoadingReducer, state as loadingState} from "./reducers/loading"


export const StoreContext = createContext(null);

export default ({children}) => {

    const [loading, dispatchLoading] = useReducer(LoadingReducer, loadingState);

    const store = {
        loading: [loading, dispatchLoading],
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};