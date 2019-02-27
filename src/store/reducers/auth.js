import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showAuthForm: false,
    userData: {},
    errorMessage: null,
    authentication: false,
    isAuthenticated: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_INIT:
            return {
                ...state,
                showAuthForm: true,
                isAuthenticated: false,
                errorMessage: null
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
                errorMessage: null
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
                errorMessage: null
            };
        case actionTypes.AUTH_FAILURE: 
            return {
                ...state,
                showAuthForm: true,
                authentication: false,
                errorMessage: action.errorMessage
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
                errorMessage: null
            };
        case actionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                errorMessage: action.error
            };
        case actionTypes.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: {
                    userName: action.userName
                },
                isAuthenticated: true,
                errorMessage: null
            };
        case actionTypes.GET_USER_DATA_FAILURE: 
            return {
                ...state,
                isAuthenticated: false,
                errorMessage: action.errorMessage
            };
        case actionTypes.REG_START:
            return {
                ...state,
                showAuthForm: true,
                isAuthenticated: false,
                errorMessage: null
            };
        case actionTypes.REG_SUCCESS:
            return {
                ...state,
                showAuthForm: false,
                userData: {
                    userName: action.userName
                },
                isAuthenticated: true,
                errorMessage: null
            };
        case actionTypes.REG_FAILURE: 
            return {
                ...state,
                showAuthForm: true,
                errorMessage: action.errorMessage
            };
        default: 
            return state;
        }
    };

export default reducer;
