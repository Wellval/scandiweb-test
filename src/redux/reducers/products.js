import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    list: [],
    loading: false,
    selected: null
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
        case actionTypes.GET_PRODUCT_BY_ID_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCT_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                selected: action.payload,
            }
        default:
            return state;
    }

}

export default reducer;