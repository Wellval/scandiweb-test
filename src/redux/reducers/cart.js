import * as actionTypes from "../../constants/actionTypes";
import { getEqualIndex } from "../../utils/groupItems";

const initialState = {
    isOpen: false,
    list: JSON.parse(localStorage.getItem('products')) || []
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
        case actionTypes.CHANGE_CART_ITEM_ATTRIBUTE:
            return {
                ...state,
                list: state.list.map(item => {
                    const { name, value } = action.payload.attribute;
                    if (getEqualIndex([action.payload.item], item) !== -1) {
                        return {
                            ...item, 
                            attrValues: {
                                ...item.attrValues,
                                [name]: value
                            }
                        };
                    }
                    return item;
                })
            }
        case actionTypes.REMOVE_CART_ITEM:
            const removeIndex = getEqualIndex(state.list, action.payload);
            const newArray = [...state.list];
            newArray.splice(removeIndex, 1)
            return {
                ...state,
                list: newArray
            }
        default:
            return state;
    }
}

export default reducer;