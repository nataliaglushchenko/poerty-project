import * as actionTypes from '../actions/actionTypes';

const initialState = {
    overview: {},
    overviewLoading: false,
    isOverviewLoaded: false,
    poemPreview: {},
    poemPreviewLoading: false,
    ispoemPreviewLoaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_OVERVIEW_START: return {
            ...state,
            overviewLoading: true,
            isOverviewLoaded: false
        };            
        case actionTypes.FETCH_OVERVIEW_SUCCESS: return {
            ...state,
            overviewLoading: false,
            overview: action.overview,
            isOverviewLoaded: true
        }; 
        case actionTypes.FETCH_OVERVIEW_FAIL: return {
            ...state,
            overviewLoading: false,
            isOverviewLoaded: false
        }; 
        case actionTypes.FETCH_POEM_PREVIEW_START: return {
            ...state,
            poemPreviewLoading: true,
            isPoemPreviewLoaded: false
        };            
        case actionTypes.FETCH_POEM_PREVIEW_SUCCESS: return {
            ...state,
            poemPreviewLoading: false,
            poemPreview: action.poemPreview,
            isPoemPreviewLoaded: true
        }; 
        case actionTypes.FETCH_POEM_PREVIEW_FAIL: return {
            ...state,
            poemPreviewLoading: false,
            isPoemPreviewLoaded: false
        }; 
        default: return state;
    }  
};

export default reducer;