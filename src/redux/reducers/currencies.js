import * as actionTypes from "../../constants/actionTypes";

const initialState = {
    list: [],
    loading: false,
    selected: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENCIES_SUCCESS:
            return {
                ...state,
                list: action.payload,
                selected: action.payload[0],
                loading: false
            }
        case actionTypes.GET_CURRENCIES_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_CURRENCIES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SELECT_CURRENCY:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state;
    }
}

export default reducer;