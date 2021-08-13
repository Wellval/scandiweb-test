import { gql } from '@apollo/client';
import * as actionTypes from '../../constants/actionTypes'
import { client } from '../../utils/ClientApi';

export const requestProducts = (categoryName) => async dispatch => {
    dispatch({ type: actionTypes.GET_PRODUCTS_START });
    try {
        const result = await client.query({
            query: gql`
                query getProducts {
                    category(input: { title: "${categoryName}" }) {
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
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: result.data.category.products });
    } catch (e) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILED });
    }
}

export const addProductAttribute = productAttribute => dispatch => dispatch({ type: actionTypes.ADD_PRODUCT_ATTRIBUTE, payload: productAttribute });
