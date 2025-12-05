
const getFromLocalStorageToFavorites = () => {
    const local = localStorage.getItem("favoritesItem")
    return local ? JSON.parse(local) : []
}

const initialState = {
    items: getFromLocalStorageToFavorites(),
}


const writeFromLocalStorageToBasketPrice = (data) => {
    localStorage.setItem("favoritesItem", JSON.stringify(data))
}


export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}