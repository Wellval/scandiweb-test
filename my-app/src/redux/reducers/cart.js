import * as actionTypes from "../../constants/actionTypes";

const initialState = {
    isOpen: false,
    list: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case actionTypes.ADD_CART_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload],
            }
        case actionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload.id),
            }
        default:
            return state;
    }
}

export default reducer;