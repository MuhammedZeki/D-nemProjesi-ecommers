import {
    ADD_CARD,
    UPDATE_CARD,
    DELETE_CARD,
    SELECT_CARD,
    SET_DEFAULT_CARD,
} from "../actions/cardActions";

const getFromLocalStorage = (key, defaultValue) => {
    const local = localStorage.getItem(key);
    return local ? JSON.parse(local) : defaultValue;
};

const writeToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
    cards: getFromLocalStorage("cards", []),
    selectedCardId: getFromLocalStorage("selectedCardId", null),
    defaultCardId: getFromLocalStorage("defaultCardId", null),
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {


        case ADD_CARD: {
            const newCard = {
                ...action.payload,
                id: Date.now(),
            };
            const newList = [...state.cards, newCard];
            writeToLocalStorage("cards", newList);

            const newSelectedId = state.cards.length === 0 ? newCard.id : state.selectedCardId;
            const newDefaultId = state.cards.length === 0 ? newCard.id : state.defaultCardId;

            if (state.cards.length === 0) {
                writeToLocalStorage("selectedCardId", newSelectedId);
                writeToLocalStorage("defaultCardId", newDefaultId);
            }

            return {
                ...state,
                cards: newList,
                selectedCardId: newSelectedId,
                defaultCardId: newDefaultId,
            };
        }

        case UPDATE_CARD: {
            const { id, data } = action.payload;
            const updated = state.cards.map(card =>
                card.id === id ? { ...card, ...data } : card
            );
            writeToLocalStorage("cards", updated);
            return { ...state, cards: updated };
        }

        case DELETE_CARD: {
            const newList = state.cards.filter(card => card.id !== action.payload);

            const newSelectedId =
                state.selectedCardId === action.payload ? null : state.selectedCardId;
            const newDefaultId =
                state.defaultCardId === action.payload ? null : state.defaultCardId;

            writeToLocalStorage("cards", newList);
            writeToLocalStorage("selectedCardId", newSelectedId);
            writeToLocalStorage("defaultCardId", newDefaultId);

            return {
                ...state,
                cards: newList,
                selectedCardId: newSelectedId,
                defaultCardId: newDefaultId,
            };
        }

        case SELECT_CARD: {
            writeToLocalStorage("selectedCardId", action.payload);
            return { ...state, selectedCardId: action.payload };
        }

        case SET_DEFAULT_CARD: {
            writeToLocalStorage("defaultCardId", action.payload);
            return { ...state, defaultCardId: action.payload };
        }

        default:
            return state;
    }
};

export default cardReducer;