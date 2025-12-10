import {
    ADD_ADDRESS,
    UPDATE_ADDRESS,
    DELETE_ADDRESS,
    SELECT_ADDRESS,
    SET_DEFAULT_ADDRESS,
    LOAD_ADDRESSES,
} from "../actions/addressActions";

const getFromLocalStorage = (key, defaultValue) => {
    const local = localStorage.getItem(key);
    return local ? JSON.parse(local) : defaultValue;
};

const writeToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
    addresses: getFromLocalStorage("addresses", []),
    selectedIndex: getFromLocalStorage("selectedIndex", null),
    defaultIndex: getFromLocalStorage("defaultIndex", null),
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ADDRESSES:
            return {
                ...state,
                addresses: getFromLocalStorage("addresses", []),
                selectedIndex: getFromLocalStorage("selectedIndex", null),
                defaultIndex: getFromLocalStorage("defaultIndex", null),
            };

        case ADD_ADDRESS: {
            const newList = [...state.addresses, action.payload];
            writeToLocalStorage("addresses", newList);
            return { ...state, addresses: newList };
        }

        case UPDATE_ADDRESS: {
            const { index, data } = action.payload;
            const updated = [...state.addresses];
            updated[index] = data;
            writeToLocalStorage("addresses", updated);
            return { ...state, addresses: updated };
        }

        case DELETE_ADDRESS: {
            const newList = state.addresses.filter((_, i) => i !== action.payload);

            const newSelected =
                state.selectedIndex === action.payload ? null : state.selectedIndex;
            const newDefault =
                state.defaultIndex === action.payload ? null : state.defaultIndex;

            writeToLocalStorage("addresses", newList);
            writeToLocalStorage("selectedIndex", newSelected);
            writeToLocalStorage("defaultIndex", newDefault);

            return {
                ...state,
                addresses: newList,
                selectedIndex: newSelected,
                defaultIndex: newDefault,
            };
        }

        case SELECT_ADDRESS: {
            writeToLocalStorage("selectedIndex", action.payload);
            return { ...state, selectedIndex: action.payload };
        }

        case SET_DEFAULT_ADDRESS: {
            writeToLocalStorage("defaultIndex", action.payload);
            return { ...state, defaultIndex: action.payload };
        }

        default:
            return state;
    }
};

export default addressReducer;
