import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { thunk } from "redux-thunk";
import { favReducer } from "./reducers/favReducer";

const rootReducer = combineReducers({
    basket: basketReducer,
    favorite: favReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))