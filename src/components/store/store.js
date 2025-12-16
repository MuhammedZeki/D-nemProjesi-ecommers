import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { thunk } from "redux-thunk";
import { favReducer } from "./reducers/favReducer";
import addressReducer from "./reducers/addressReducer";
import cardReducer from "./reducers/cardReducer"; // YENİ

const rootReducer = combineReducers({
    basket: basketReducer,
    favorite: favReducer,
    address: addressReducer,
    card: cardReducer, // YENİ
});

export const store = createStore(rootReducer, applyMiddleware(thunk))