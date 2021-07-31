import * as actionTypes from "../../constants/actionTypes";

const initialState = {
    name: "",
    categories: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                products: action.payload.products,
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
        default: 
            return state;
    }
}

export default reducer;