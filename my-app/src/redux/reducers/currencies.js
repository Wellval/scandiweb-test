import * as actionTypes from "../../constants/actionTypes";

const initialState = {
    list: [],
    loading: false,
    selectedCurrency: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENCIES_SUCCESS:
            return {
                ...state,
                list: action.payload,
                selectedCurrency: action.payload[0],
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
                selectedCurrency: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;