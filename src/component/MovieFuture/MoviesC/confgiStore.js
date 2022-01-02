import { createStore, combineReducers} from "redux";
import {groupReducer} from "../MoviesB/groupReducer";

export const confgiStore = () =>{
    const myStore=createStore(combineReducers({groupReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return myStore;
};
