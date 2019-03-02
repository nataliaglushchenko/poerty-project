import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showAuthForm: false,
    userData: {},
    loginErrorMessage: '',
    registrationErrorMessage: '',
    authentication: false,
    isAuthenticated: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ERROR_RESET: 
            return {
                ...state,
                loginErrorMessage: '',
                registrationErrorMessage: ''
            }
        case actionTypes.AUTH_INIT:
            return {
                ...state,
                showAuthForm: true,
                isAuthenticated: false,
                loginErrorMessage: ''
            };
        case actionTypes.AUTH_CANCEL:
            return {
                ...state,
                showAuthForm: false
            };
        case actionTypes.AUTH_START:
            return {
                ...state,
                showAuthForm: true,
                authentication: true,
                isAuthenticated: false,
                loginErrorMessage: ''
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                showAuthForm: false,
                userData: {
                    userName: action.userName
                },
                authentication: false,
                isAuthenticated: true,
                loginErrorMessage: ''
            };
        case actionTypes.AUTH_FAILURE: 
            return {
                ...state,
                showAuthForm: true,
                authentication: false,
                loginErrorMessage: action.errorMessage
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                userData: {
                    userName: ''
                },
                showAuthForm: false,
                authentication: false,
                isAuthenticated: false,
                loginErrorMessage: ''
            };
        case actionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                logoutErrorMessage: action.error
            };
        case actionTypes.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: {
                    userName: action.userName
                },
                isAuthenticated: true,
                loginErrorMessage: ''
            };
        case actionTypes.GET_USER_DATA_FAILURE: 
            return {
                ...state,
                isAuthenticated: false
            };
        case actionTypes.REG_START:
            return {
                ...state,
                showAuthForm: true,
                isAuthenticated: false,
                registrationErrorMessage: ''
            };
        case actionTypes.REG_SUCCESS:
            return {
                ...state,
                showAuthForm: false,
                userData: {
                    userName: action.userName
                },
                isAuthenticated: true,
                registrationErrorMessage: ''
            };
        case actionTypes.REG_FAILURE: 
            return {
                ...state,
                showAuthForm: true,
                registrationErrorMessage: action.errorMessage
            };
        default: 
            return state;
        }
    };

export default reducer;
