import * as actionTypes from '../actions/actionTypes';

const initialState = {
    authors: [],
    loading: false,
    isLoaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_AUTHORS_START: return {
            ...state,
            loading: true,
            isLoaded: false
        };            
        case actionTypes.FETCH_AUTHORS_SUCCESS: return {
            ...state,
            loading: false,
            authors: action.authors,
            isLoaded: true
        }; 
        case actionTypes.FETCH_AUTHORS_FAIL: return {
            ...state,
            loading: false,
            isLoaded: false
        }; 
        default: return state;
    }  
};

export default reducer;