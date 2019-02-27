import * as actionTypes from './actionTypes';

export const fetchOverviewStart = () => {
    return {
        type: actionTypes.FETCH_OVERVIEW_START
    };
};

export const fetchOverviewSuccess = (overview) => {
    return {
        type: actionTypes.FETCH_OVERVIEW_SUCCESS,
        overview: overview  
    }
};

export const fetchOverviewFail = (error) => {
    return {
        type: actionTypes.FETCH_OVERVIEW_FAIL,
        error: error
    }
};

export const fetchOverview = (categorySlug) => {
    return (dispatch) => {
        dispatch(fetchOverviewStart());
        fetch('http://localhost:4000/categories/' + categorySlug)
            .then(res => res.json())
            .then(res=>{
            dispatch(fetchOverviewSuccess(res));
        })
            .catch(err=> {
                dispatch(fetchOverviewFail(err));
            });
    };
};


export const fetchPoemPreviewStart = () => {
    return {
        type: actionTypes.FETCH_POEM_PREVIEW_START
    };
};

export const fetchPoemPreviewSuccess = (poemPreview) => {
    return {
        type: actionTypes.FETCH_POEM_PREVIEW_SUCCESS,
        poemPreview: poemPreview  
    }
};

export const fetchPoemPreviewFail = (error) => {
    return {
        type: actionTypes.FETCH_POEM_PREVIEW_FAIL,
        error: error
    }
};

export const fetchPoemPreview = (poemId) => {
    return (dispatch) => {
        dispatch(fetchPoemPreviewStart());
        fetch('http://localhost:4000/poem-preview/' + poemId)
            .then(res => res.json())
            .then(res=>{
            dispatch(fetchPoemPreviewSuccess(res));
        })
            .catch(err=> {
                dispatch(fetchPoemPreviewFail(err));
            });
    };
};