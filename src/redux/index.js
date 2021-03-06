import { combineReducers } from "redux";
import categories from './reducers/categories';
import currencies from './reducers/currencies'
import products from './reducers/products';
import cart from './reducers/cart';

export const rootReducer = combineReducers({
    categories, currencies, products, cart
});
  