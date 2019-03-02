import * as actionTypes from './actionTypes';

export const errorReset = () => {
    return {
        type: actionTypes.ERROR_RESET
    };
};

export const authInit = () => {
    return {
        type: actionTypes.AUTH_INIT
    };
};

export const authCancel = () => {
    return {
        type: actionTypes.AUTH_CANCEL
    };
};
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (userName) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userName: userName
    };
};

export const authFailure = (errorMessage) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        errorMessage: errorMessage
    };
};

export const authentication = (authData) => {
    return dispatch => {
        dispatch(authStart());
        fetch('http://localhost:4000/login',{
                method: "POST",
                mode: "cors",
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    userName: authData.userName,
                    password: authData.password
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
               dispatch( authSuccess( res ));
            })
            .catch(error => {
                dispatch( authFailure( error.message ));
            });
    };
};

export const regStart = () => {
    return {
        type: actionTypes.REG_START
    };
};

export const regSuccess = (userName) => {
    return {
        type: actionTypes.REG_SUCCESS,
        userName: userName
    };
};

export const regFailure = (errorMessage) => {
    return {
        type: actionTypes.REG_FAILURE,
        errorMessage: errorMessage
    };
};

export const registration = (regData) => {
    return dispatch => {
        dispatch(regStart());
        fetch('http://localhost:4000/registration',{
                method: "POST",
                mode: "cors",
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    userName: regData.userName,
                    password: regData.password
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
               dispatch( regSuccess( res ));
            })
            .catch(error => {
                dispatch( regFailure( error.message ));
            });
    };
};

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
};

export const logoutFailure = (error) => {
    return {
        type: actionTypes.LOGOUT_FAILURE,
        error: error
    };
};

export const logout = () => {
    return dispatch => {
        fetch('http://localhost:4000/logout',{
                method: "GET",
                credentials: 'include'
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
               dispatch( logoutSuccess( res ));
            })
            .catch(error => {
                dispatch( logoutFailure( error.message ));
            });
    };
};

export const getUserDataStart = () => {
    return {
        type: actionTypes.GET_USER_DATA_START
    };
};

export const getUserDataSuccess = (userData) => {
    return {
        type: actionTypes.GET_USER_DATA_SUCCESS,
        userName: userData
    };
};

export const getUserDataFailure = (errorMessage) => {
    return {
        type: actionTypes.GET_USER_DATA_FAILURE,
        errorMessage: errorMessage
    };
};

export const getUserData = () => {
    return (dispatch) => {
        dispatch(getUserDataStart());
        fetch('http://localhost:4000/me',{
            method: 'GET',
            credentials: 'include'
            })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(errorData => {
                            throw new Error(errorData.error.message);
                        });
                }
                return res.json();
            })
            .then(res=>{
            dispatch(getUserDataSuccess(res));
        })
            .catch(err=> {
                dispatch(getUserDataFailure(err.message));
            });
    };
}