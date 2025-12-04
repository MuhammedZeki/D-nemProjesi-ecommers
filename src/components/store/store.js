import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { thunk } from "redux-thunk";



export const store = createStore(basketReducer, applyMiddleware(thunk))