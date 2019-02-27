import * as actionTypes from './actionTypes';

export const fetchPoemStart = () => {
    return {
        type: actionTypes.FETCH_POEM_START
    };
};

export const fetchPoemSuccess = (poem) => {
    return {
        type: actionTypes.FETCH_POEM_SUCCESS,
        poem: poem  
    }
};

export const fetchPoemFail = (error) => {
    return {
        type: actionTypes.FETCH_POEM_FAIL,
        error: error
    }
};

export const fetchPoem = (poemId) => {
    return (dispatch) => {
        dispatch(fetchPoemStart());
        fetch('http://localhost:4000/poems/' + poemId)
            .then(res => res.json())
            .then(res=>{
            dispatch(fetchPoemSuccess(res));
        })
            .catch(err=> {
                dispatch(fetchPoemFail(err));
            });
    };
};