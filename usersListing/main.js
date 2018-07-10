import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducer from './reducers/reducers';

let store = createStore(reducer, {});
let appElement = document.getElementById('app');
if (appElement) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        appElement
    );
}