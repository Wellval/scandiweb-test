import { combineReducers } from "redux";
import categories from './reducers/categories';
import currencies from './reducers/currencies'

export const rootReducer = combineReducers({
    categories, currencies
});
  