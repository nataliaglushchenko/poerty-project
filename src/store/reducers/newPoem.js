import * as actionTypes from '../actions/actionTypes';

const initialState = {
    newPoem: {},
    submitting: false,
    submitted: false,
    authorSubmitting: false,
    authorSubmitted: false,
    error: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_NEW_POEM_START:
            return {
                ...state,
                submitting: true,
                submitted: false
            };
        case actionTypes.CREATE_NEW_POEM_SUCCESS:
            return {
                ...state,
                newPoem: action.newPoem,
                submitting: false,
                sumbitted: true
            };
        case actionTypes.CREATE_NEW_POEM_FAIL: 
            return {
                ...state,
                submitting: false,
                error: {
                    ...state.error,
                    newPoem: action.errorMessage
                }
            };
        case actionTypes.ADD_NEW_AUTHOR_START:
            return {
                ...state,
                authorSubmitting: true,
                authorSubmitted: false
            };
        case actionTypes.ADD_NEW_AUTHOR_SUCCESS:
            return {
                ...state,
                authorSubmitting: false,
                authorSumbitted: true
            };
        case actionTypes.ADD_NEW_AUTHOR_FAILURE: 
            return {
                ...state,
                authorSubmitting: false,
                error: {
                    ...state.error,
                    author: action.errorMessage
                }
            };
        case actionTypes.ADD_NEW_CATEGORY_START:
            return {
                ...state,
                categorySubmitting: true,
                categorySubmitted: false
            };
        case actionTypes.ADD_NEW_CATEGORY_SUCCESS:
            return {
                ...state,
                categorySubmitting: false,
                categorySumbitted: true
            };
        case actionTypes.ADD_NEW_CATEGORY_FAILURE: 
            return {
                ...state,
                categorySubmitting: false,
                error: {
                    ...state.error,
                    category: action.errorMessage
                }
            };
        default: 
            return state;
        }
    };

export default reducer;
