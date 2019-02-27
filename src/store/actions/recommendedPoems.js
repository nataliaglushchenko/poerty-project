import * as actionTypes from './actionTypes';

export const fetchRecommendedPoemsStart = () => {
    return {
        type: actionTypes.FETCH_RECOMMENDED_POEMS_START
    };
};

export const fetchRecommendedPoemsSuccess = (recommendedPoems) => {
    return {
        type: actionTypes.FETCH_RECOMMENDED_POEMS_SUCCESS,
        recommendedPoems: recommendedPoems
    }
};

export const fetchRecommendedPoemsFail = (error) => {
    return {
        type: actionTypes.FETCH_RECOMMENDED_POEMS_FAIL,
        error: error
    }
};

export const fetchRecommendedPoems = () => {
    return (dispatch) => {
        dispatch(fetchRecommendedPoemsStart());
        fetch('http://localhost:4000/recommended-poems')
            .then(res => res.json())
            .then(res=>{
            dispatch(fetchRecommendedPoemsSuccess(res));
        })
            .catch(err=> {
                dispatch(fetchRecommendedPoemsFail(err));
            });
    };
};