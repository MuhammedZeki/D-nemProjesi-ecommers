import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    basket: basketReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))