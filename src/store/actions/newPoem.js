import * as actionTypes from './actionTypes';

import * as actions from './index';

export const createNewPoemStart = () => {
    return {
        type: actionTypes.CREATE_NEW_POEM_START
    }
}

export const createNewPoemSuccess = ( newPoem ) => {
    return {
        type: actionTypes.CREATE_NEW_POEM_SUCCESS,
        newPoem: newPoem
    };
};

export const createNewPoemFail = ( errorMessage ) => {
    return {
        type: actionTypes.CREATE_NEW_POEM_FAIL,
        errorMessage: errorMessage
    };
};

export const createNewPoem = ( newPoem ) => {
    return dispatch => {
        dispatch(createNewPoemStart());
        // axios.post('/poems.json', newPoem)
            fetch('http://localhost:4000/new-poem',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    title: newPoem.title,
                    authorId: Number(newPoem.authorId),
                    categoryId: Number(newPoem.categoryId),
                    content: newPoem.content
                  })
            })
            .then(res => res.json())
            .then( res => {
               dispatch(createNewPoemSuccess( res.newPoem ));
            })
            .catch(error => {
                dispatch( createNewPoemFail( error ));
            });
    };
};


export const addNewAuthorStart = () => {
    return {
        type: actionTypes.ADD_NEW_AUTHOR_START
    }
}

export const addNewAuthorSuccess = () => {
    return {
        type: actionTypes.ADD_NEW_AUTHOR_SUCCESS
    };
};

export const addNewAuthorFailure = ( errorMessage ) => {
    return {
        type: actionTypes.ADD_NEW_AUTHOR_FAILURE,
        errorMessage: errorMessage
    };
};

export const addNewAuthor = ( author ) => {
    return dispatch => {
        dispatch(addNewAuthorStart());
            fetch('http://localhost:4000/new-author',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: author.authorName
                  })
            })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(errorData => {
                            throw new Error(errorData.message);
                        });
                }
                return res.json();
            })
            .then( res => {
               dispatch(addNewAuthorSuccess());
               dispatch(actions.fetchAuthors());
            })
            .catch(error => {
                dispatch( addNewAuthorFailure( error.message ));
            });
    };
};

export const addNewCategoryStart = () => {
    return {
        type: actionTypes.ADD_NEW_CATEGORY_START
    }
}

export const addNewCategorySuccess = () => {
    return {
        type: actionTypes.ADD_NEW_CATEGORY_SUCCESS
    };
};

export const addNewCategoryFailure = ( errorMessage ) => {
    return {
        type: actionTypes.ADD_NEW_CATEGORY_FAILURE,
        errorMessage: errorMessage
    };
};

export const addNewCategory = ( category ) => {
    return dispatch => {
        dispatch(addNewCategoryStart());
            fetch('http://localhost:4000/new-category',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: category.categoryName
                  })
            })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(errorData => {
                            throw new Error(errorData.message);
                        });
                }
                return res.json();
            })
            .then( res => {
               dispatch(addNewCategorySuccess());
               dispatch(actions.fetchCategories());
            })
            .catch(error => {
                dispatch( addNewCategoryFailure( error.message ));
            });
    };
};
