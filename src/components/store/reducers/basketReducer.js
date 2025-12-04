import { ADD_BASKET } from "../actions/basketActions"

const initialState = {
    items: [],
    total: 0
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET:
            // eslint-disable-next-line no-case-declarations
            const existingItem = state.items.find(i => i.id === action.payload.id)
            // eslint-disable-next-line no-case-declarations
            let newItems;
            if (existingItem) {
                newItems = state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, count: item.count + action.payload.count }
                        : item
                );
            } else {
                newItems = [...state.items, { ...action.payload, count: action.payload.count }];
            }
            // eslint-disable-next-line no-case-declarations
            const newTotal = newItems.reduce(
                (sum, item) => sum + item.newPrice * item.count,
                0
            );

            return { items: newItems, total: newTotal };
        default:
            return state
    }
}