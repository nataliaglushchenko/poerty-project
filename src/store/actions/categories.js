import * as actionTypes from './actionTypes';

export const fetchCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    };
};

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    }
};

export const fetchCategoriesFailure = (error) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILURE,
        error: error
    }
};

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch(fetchCategoriesStart());
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(res=>{
            dispatch(fetchCategoriesSuccess(res));
        })
            .catch(err=> {
                dispatch(fetchCategoriesFailure(err));
            });
    };
};
