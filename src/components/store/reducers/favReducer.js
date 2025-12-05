import { ADD_FAV, DELETE_FAV } from "../actions/favoritesAction"

const getFromLocalStorageToFavorites = () => {
    const local = localStorage.getItem("favoritesItem")
    return local ? JSON.parse(local) : []
}

const initialState = {
    favorites: getFromLocalStorageToFavorites(),
}


const writeFromLocalStorageToFavorites = (data) => {
    localStorage.setItem("favoritesItem", JSON.stringify(data))
}


export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: {
            const exists = state.favorites.find(i => i.id === action.payload.id)
            if (!exists) {
                const newFavs = [...state.favorites, action.payload]
                writeFromLocalStorageToFavorites(newFavs)
                return { ...state, favorites: newFavs }
            }
            return state
        }
        case DELETE_FAV: {
            const filtered = state.favorites.filter(i => i.id !== action.payload)
            writeFromLocalStorageToFavorites(filtered)
            return { ...state, favorites: filtered }
        }
        default:
            return state
    }
}