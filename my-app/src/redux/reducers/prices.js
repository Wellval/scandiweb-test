import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    prices: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRICES_SUCCESS:
            return {
                ...state,
                prices: action.payload,
                loading: false,
            }
        case actionTypes.GET_PRICES_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.GET_PRICES_START:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}

export default reducer;