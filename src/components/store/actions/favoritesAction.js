import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";


export function toFav(data) {
    return { type: ADD_FAV, payload: data };
}

export function deleteFav(id) {
    return { type: DELETE_FAV, payload: id };
}


export const toFavAPI = (data) => (dispatch) => {
    return axios
        .post('/db.json', data)
        .then((res) => {
            if (res.status === 201) {
                dispatch(toFav(res.data));
            } else {
                console.log('Fav faild');
            }
        })
        .catch((error) => console.log(error));
};


export const getFavAPI = () => (dispatch) => {
    return axios
        .get('/db.json')
        .then((res) => {
            if (res.status === 200) {
                dispatch(deleteFav(res.data.id));
            } else {
                console.log('fav faild!');
            }
        })
        .catch((error) => console.log(error));
};