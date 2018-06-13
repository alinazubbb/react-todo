import { combineReducers } from 'redux';
import list from './list.js';
import input from './input.js';

const rootReducer = combineReducers({
  listState: list,
  inputState: input
});

export default rootReducer;