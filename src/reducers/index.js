import { combineReducers } from 'redux';
import list from './list.js';
import input from './input.js';
import jsonState from './jsonState.js';

const rootReducer = combineReducers({
  listState: list,
  inputState: input,
  jsonState: jsonState
});

export default rootReducer;