import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    list: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false,
            }
        default:
            return state;
    }

}

export default reducer;