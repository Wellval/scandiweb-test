import * as actionTypes from "../../constants/actionTypes";

export const toggleCart = cart => dispatch => dispatch({ type: actionTypes.TOGGLE_CART, payload: cart });
export const addCartItem = cartItem => dispatch => dispatch({ type: actionTypes.ADD_CART_ITEM, payload: cartItem });
export const removeCartItem = cartItem => dispatch => dispatch({ type: actionTypes.REMOVE_CART_ITEM, payload: cartItem });
