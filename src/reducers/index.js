import { combineReducers } from 'redux';
import list from './list.js';
import input from './input.js';
import jsonList from './jsonList.js';

const rootReducer = combineReducers({
  listState: list,
  inputState: input,
  jsonList: jsonList
});

export default rootReducer;