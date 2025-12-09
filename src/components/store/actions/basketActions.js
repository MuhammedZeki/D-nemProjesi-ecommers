import axios from "axios";

export const ADD_BASKET = "ADD_BASKET";
export const GET_BASKET = "GET_BASKET";
export const DELETE_BASKET = "DELETE_BASKET";
export const TOTAL_BASKET = "TOTAL_BASKET";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export function toBasket(data) {
    return { type: ADD_BASKET, payload: data };
}
export function getBasket(data) {
    return { type: GET_BASKET, payload: data };
}
export function deleteBasket(id) {
    return { type: DELETE_BASKET, payload: id };
}
export function getTotal() {
    return { type: TOTAL_BASKET };
}
export function incrementItem(id) {
    return { type: INCREMENT_ITEM, payload: id };
}

export function decrementItem(id) {
    return { type: DECREMENT_ITEM, payload: id };
}

export const toBasketAPI = (data) => (dispatch) => {
    return axios
        .post('/db.json', data)
        .then((res) => {
            if (res.status === 201) {
                dispatch(toBasket(res.data));
            } else {
                console.log('Basket faild');
            }
        })
        .catch((error) => console.log(error));
};

export const getBasketAPI = () => (dispatch) => {
    return axios
        .get('/db.json')
        .then((res) => {
            if (res.status === 200) {
                dispatch(getBasket(res.data));
            } else {
                console.log('Basket faild!');
            }
        })
        .catch((error) => console.log(error));
};

export const getDeleteAPI = () => (dispatch) => {
    return axios
        .get('/db.json')
        .then((res) => {
            if (res.status === 200) {
                dispatch(deleteBasket(res.data.id));
            } else {
                console.log('Basket faild!');
            }
        })
        .catch((error) => console.log(error));
};