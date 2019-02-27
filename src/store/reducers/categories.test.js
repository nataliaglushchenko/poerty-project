import reducer from './categories';
import * as actionTypes from '../actions/actionTypes';

describe('categories reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            categories: [],
            loading: false,
            isLoaded: false
        });
    });
    it('should fetch categories upon fetchCategories call', () => {
        expect(reducer({
            categories: [],
            loading: false,
            isLoaded: false 
        }, { 
            type: actionTypes.FETCH_CATEGORIES_SUCCESS,
            categories: ['some-category'] })).toEqual({
            categories: ['some-category'],
            loading: false,
            isLoaded: true
        });
    });
});
