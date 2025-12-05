/* eslint-disable no-fallthrough */
import { ADD_BASKET, DELETE_BASKET, TOTAL_BASKET } from "../actions/basketActions"

const getFromLocalStorageToBasket = () => {
    const local = localStorage.getItem("basket")
    return local ? JSON.parse(local) : []
}

const getFromLocalStorageTotal = () => {
    const local = localStorage.getItem("totalPrice")
    return local ? JSON.parse(local) : 0
}

const initialState = {
    items: getFromLocalStorageToBasket(),
    total: getFromLocalStorageTotal()
}

const writeFromLocalStorageToBasket = (product) => {
    localStorage.setItem("basket", JSON.stringify(product))
}
const writeFromLocalStorageToBasketPrice = (product) => {
    localStorage.setItem("totalPrice", JSON.stringify(product))
}
export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET:
            {
                const basket = state.items.find(i => i.id === action.payload.id)
                if (basket) {
                    const find = state.items.filter(i => i.id !== action.payload.id)
                    basket.count += action.payload.count
                    state.items = [...find, basket]
                    writeFromLocalStorageToBasket(state.items)
                } else {
                    state.items = [...state.items, action.payload]
                    writeFromLocalStorageToBasket(state.items)

                }
            }
        case TOTAL_BASKET: {
            const total = state.items.reduce(
                (sum, item) => sum + item.count * item.newPrice,
                0
            )

            localStorage.setItem("totalPrice", JSON.stringify(total))

            return { ...state, total }
        }
        case DELETE_BASKET:
            {
                const filtered = state.items.filter(i => i.id !== action.payload);

                const newTotal = filtered.reduce(
                    (sum, item) => sum + item.count * item.newPrice,
                    0
                );

                state.items = filtered;
                state.total = newTotal;

                writeFromLocalStorageToBasket(filtered);
                writeFromLocalStorageToBasketPrice(newTotal);
                return { ...state };
            }
        default:
            return state;
    }
}