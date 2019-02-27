import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [],
    loading: false,
    isLoaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_CATEGORIES_START: return {
            ...state,
            loading: true,
            isLoaded: false
        };            
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return {
            ...state,
            loading: false,
            categories: action.categories,
            isLoaded: true
        }; 
        case actionTypes.FETCH_CATEGORIES_FAILURE: return {
            ...state,
            loading: false,
            isLoaded: false
        }; 
        default: return state;
    }  
};

export default reducer;