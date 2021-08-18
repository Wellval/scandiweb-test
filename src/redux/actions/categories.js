import * as actionTypes from "../../constants/actionTypes";
import { client } from "../../utils/ClientApi";
import gql from "graphql-tag";

export const requestCategories = () => async dispatch => {
    dispatch({ type: actionTypes.GET_CATEGORIES_START });
    try {
        const result = await client.query({
            query: gql`
                query getCategories {
                    categories {
                        name
                    }
                    category {
                        name
                    }
                }
            `,
        });
        dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: result.data.categories.map(x => x.name).concat(result.data.category.name) });
    } catch (e) {
        dispatch({ type: actionTypes.GET_CATEGORIES_FAILED });
    }
};

export const selectCategory = category => dispatch => dispatch({ type: actionTypes.SELECT_CATEGORY, payload: category });
