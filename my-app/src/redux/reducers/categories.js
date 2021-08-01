import * as actionTypes from "../../constants/actionTypes";

const initialState = {
    selectedCategory: null,
    categories: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                selectedCategory: action.payload[0].name,
                loading: false
            }
        case actionTypes.GET_CATEGORIES_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_CATEGORIES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        default:
            return state;
    }
}

export default reducer;