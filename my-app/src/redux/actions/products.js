import { gql } from '@apollo/client';
import * as actionTypes from '../../constants/actionTypes'
import { client } from '../../utils/ClientApi';

export const requestProducts = () => async dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCTS_START });
    try {
        const result = await client.query({
            query: gql`
                query getProducts {
                    categories {
                        products {
                            id
                            name
                            inStock
                            gallery
                            description
                            category
                            brand
                            prices {
                                amount
                                currency
                            }
                            attributes {
                                name
                                id
                                type
                                items {
                                    displayValue
                                    value
                                    id
                                  }
                            }
                        }
                    }
                }
            `
        });
        const productsByCategory = result.data.categories.map(x => x.products.map(y => y));
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: productsByCategory });
    } catch (e) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILED });
    }
}