import * as actionTypes from '../actions/actionTypes';

const initialState = {
    poem: {},
    loading: false,
    poemIsLoaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_POEM_START: return {
            ...state,
            loading: true,
            poemIsLoaded: false
        };            
        case actionTypes.FETCH_POEM_SUCCESS: return {
            ...state,
            loading: false,
            poem: action.poem,
            poemIsLoaded: true
        }; 
        case actionTypes.FETCH_POEM_FAIL: return {
            ...state,
            loading: false,
            poemIsLoaded: false
        }; 
        default: return state;
    }  
};

export default reducer;