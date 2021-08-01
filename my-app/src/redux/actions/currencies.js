import * as actionTypes from "../../constants/actionTypes";
import { client } from "../../utils/ClientApi";
import gql from "graphql-tag";

export const requestCurrencies = () => async dispatch =>  {
    dispatch({ type: actionTypes.GET_CURRENCIES_START });
    try {
        const result = await client.query({
            query: gql`
                query getCurrencies {
                    currencies
                }
            `,
        });
        dispatch({ type: actionTypes.GET_CURRENCIES_SUCCESS, payload: result.data.currencies });
    } catch (e) {
        dispatch({ type: actionTypes.GET_CURRENCIES_FAILED });
    }
};

export const selectCurrency = currency => dispatch => dispatch({ type: actionTypes.SELECT_CURRENCY, payload: currency });