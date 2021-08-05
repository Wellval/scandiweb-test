import * as actionTypes from "../../constants/actionTypes";

const initialState = {
    selected: null,
    list: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                list: action.payload,
                selected: action.payload[0].name,
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
                selected: action.payload
            }
        default:
            return state;
    }
}

export default reducer;