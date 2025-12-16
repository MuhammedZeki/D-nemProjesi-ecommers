export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const SELECT_CARD = "SELECT_CARD";
export const SET_DEFAULT_CARD = "SET_DEFAULT_CARD";

export const addCard = (data) => ({
    type: ADD_CARD,
    payload: data,
});

export const updateCard = (id, data) => ({
    type: UPDATE_CARD,
    payload: { id, data },
});

export const deleteCard = (id) => ({
    type: DELETE_CARD,
    payload: id,
});

export const selectCard = (id) => ({
    type: SELECT_CARD,
    payload: id,
});

export const setDefaultCard = (id) => ({
    type: SET_DEFAULT_CARD,
    payload: id,
});

