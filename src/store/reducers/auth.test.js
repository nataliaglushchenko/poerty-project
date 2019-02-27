import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            showAuthForm: false,
            userData: {},
            errorMessage: null,
            authentication: false,
            isAuthenticated: false
        });
    });
    it('should get userData upon login', () => {
        expect(reducer({
            showAuthForm: false,
            userData: {},
            errorMessage: null,
            authentication: false,
            isAuthenticated: false 
        }, { 
            type: actionTypes.AUTH_SUCCESS,
            userName: 'some-userName' })).toEqual({
            userData: { userName: 'some-userName' } ,
            showAuthForm: false,
            authentication: false,
            isAuthenticated: true,
            errorMessage: null
        });
    });
    it('should get userData upon registration', () => {
        expect(reducer({
            showAuthForm: false,
            userData: {},
            errorMessage: null,
            authentication: false,
            isAuthenticated: false 
        }, { 
            type: actionTypes.REG_SUCCESS,
            userName: 'some-userName' })).toEqual({
            userData: { userName: 'some-userName' } ,
            showAuthForm: false,
            authentication: false,
            isAuthenticated: true,
            errorMessage: null
        });
    });
    it('should get userData upon successfull token request', () => {
        expect(reducer({
            showAuthForm: false,
            userData: {},
            errorMessage: null,
            authentication: false,
            isAuthenticated: false 
        }, { 
            type: actionTypes.GET_USER_DATA_SUCCESS,
            userName: 'some-userName' })).toEqual({
            userData: { userName: 'some-userName' } ,
            showAuthForm: false,
            authentication: false,
            isAuthenticated: true,
            errorMessage: null
        });
    });
    it('should receive "" as userData upon logout', () => {
        expect(reducer({
            showAuthForm: false,
            userData: {},
            errorMessage: null,
            authentication: false,
            isAuthenticated: false 
        }, { 
            type: actionTypes.LOGOUT_SUCCESS })).toEqual({
            userData: { userName: '' } ,
            showAuthForm: false,
            authentication: false,
            isAuthenticated: false,
            errorMessage: null
        });
    });
});
