import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { thunk } from "redux-thunk";
import { favReducer } from "./reducers/favReducer";
import addressReducer from "./reducers/addressReducer";

const rootReducer = combineReducers({
    basket: basketReducer,
    favorite: favReducer,
    address: addressReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))