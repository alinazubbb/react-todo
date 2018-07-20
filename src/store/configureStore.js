import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from '../reducers/index';

export const history = createHistory();

const middlewares = [ 
  thunk,
  // logger 
]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
