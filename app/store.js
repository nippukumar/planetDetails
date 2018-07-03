import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import login from './reducers/login.js';


const rootReducer = combineReducers({
  login
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;