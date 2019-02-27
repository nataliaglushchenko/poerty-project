import * as actionTypes from './actionTypes';

export const fetchAuthorsStart = () => {
    return {
        type: actionTypes.FETCH_AUTHORS_START
    };
};

export const fetchAuthorsSuccess = (authors) => {
    return {
        type: actionTypes.FETCH_AUTHORS_SUCCESS,
        authors: authors
    }
};

export const fetchAuthorsFail = (error) => {
    return {
        type: actionTypes.FETCH_AUTHORS_FAIL,
        error: error
    }
};

export const fetchAuthors = () => {
    return (dispatch) => {
        dispatch(fetchAuthorsStart());
        fetch('http://localhost:4000/authors')
            .then(res => res.json())
            .then(res=>{
            dispatch(fetchAuthorsSuccess(res));
        })
            .catch(err=> {
                dispatch(fetchAuthorsFail(err));
            });
    };
};
