export const ADD_ADDRESS = "ADD_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const SELECT_ADDRESS = "SELECT_ADDRESS";
export const SET_DEFAULT_ADDRESS = "SET_DEFAULT_ADDRESS";
export const LOAD_ADDRESSES = "LOAD_ADDRESSES";

export const addAddress = (data) => ({
    type: ADD_ADDRESS,
    payload: data,
});

export const updateAddress = (index, data) => ({
    type: UPDATE_ADDRESS,
    payload: { index, data },
});

export const deleteAddress = (index) => ({
    type: DELETE_ADDRESS,
    payload: index,
});

export const selectAddress = (index) => ({
    type: SELECT_ADDRESS,
    payload: index,
});

export const setDefaultAddress = (index) => ({
    type: SET_DEFAULT_ADDRESS,
    payload: index,
});

export const loadAddresses = () => ({
    type: LOAD_ADDRESSES,
});
