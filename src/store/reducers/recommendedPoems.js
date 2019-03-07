import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recommendedPoems: [],
    loading: false,
    isLoaded: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_RECOMMENDED_POEMS_START: return {
            ...state,
            loading: true,
            isLoaded: false,
            error: null
        };            
        case actionTypes.FETCH_RECOMMENDED_POEMS_SUCCESS: return {
            ...state,
            loading: false,
            recommendedPoems: action.recommendedPoems,
            isLoaded: true,
            error: null
        }; 
        case actionTypes.FETCH_RECOMMENDED_POEMS_FAIL: return {
            ...state,
            loading: false,
            isLoaded: false,
            error: action.error.message
        }; 
        default: return state;
    }  
};

export default reducer;