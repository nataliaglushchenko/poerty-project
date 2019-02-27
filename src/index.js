import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import recommendedPoemsReducer from './store/reducers/recommendedPoems';
import poemsReducer from './store/reducers/poems';
import authorsReducer from './store/reducers/authors';
import overviewReducer from './store/reducers/overview';
import categoriesReducer from './store/reducers/categories';
import newPoemReducer from './store/reducers/newPoem';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    recommendedPoems: recommendedPoemsReducer,
    poems: poemsReducer,
    authors: authorsReducer,
    overview: overviewReducer,
    categories: categoriesReducer,
    newPoem: newPoemReducer,
    auth: authReducer
});
//const rootReducer = libraryReducer;
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
    ));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
