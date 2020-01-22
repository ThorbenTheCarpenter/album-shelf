import { createStore, applyMiddleware } from 'redux'
import allReducers from "./reducers"
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

export const store = createStore(allReducers, initialState, applyMiddleware(...middleware))