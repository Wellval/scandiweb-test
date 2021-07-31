import * as actionTypes from "../../constants/actionTypes";
import { client } from "../../utils/ClientApi";
import gql from "graphql-tag";

export const requestCategory = async category => async dispatch => {
    dispatch({ type: actionTypes.GET_CATEGORIES_START });
    try {
        const result = await client.query({
            query: gql`
                query GetProds {
                    category {
                        products {
                            name
                            id
                            gallery
                            category
                        }
                    }
                }
            `,
        });
        console.log(result)
        //dispatch({ type: actionTypes.GET_CATEGORY_SUCCESS, payload: result.data.category });
    } catch (e) {
        //dispatch({ type: actionTypes.GET_CATEGORY_FAILED, payload: result.data.category });
    }
};
