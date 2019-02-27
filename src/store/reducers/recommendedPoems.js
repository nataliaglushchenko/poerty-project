import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recommendedPoems: [],
    loading: false,
    isLoaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_RECOMMENDED_POEMS_START: return {
            ...state,
            loading: true,
            isLoaded: false
        };            
        case actionTypes.FETCH_RECOMMENDED_POEMS_SUCCESS: return {
            ...state,
            loading: false,
            recommendedPoems: action.recommendedPoems,
            isLoaded: true
        }; 
        case actionTypes.FETCH_RECOMMENDED_POEMS_FAIL: return {
            ...state,
            loading: false,
            isLoaded: false
        }; 
        default: return state;
    }  
};

export default reducer;