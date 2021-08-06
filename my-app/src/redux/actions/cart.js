import * as actionTypes from "../../constants/actionTypes";

export const toggleCart = () => dispatch => dispatch({ type: actionTypes.TOGGLE_CART });
export const addCartItem = cartItem => dispatch => dispatch({ type: actionTypes.ADD_CART_ITEM, payload: cartItem });
export const removeCartItem = cartItem => dispatch => dispatch({ type: actionTypes.REMOVE_CART_ITEM, payload: cartItem });
export const changeCartItemAttribute = (cartItem, attrName, attrValue) => dispatch => dispatch({ type: actionTypes.CHANGE_CART_ITEM_ATTRIBUTE, payload: {
    item: cartItem,
    attribute: {
        value: attrValue,
        name: attrName
    }
}});
