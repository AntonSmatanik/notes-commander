import { combineReducers } from 'redux';
import { messagesReducer, notesReducer, noteReducer } from './reducers';

const allReducers = combineReducers({
  messagesReducer,
  notesReducer,
  noteReducer,
});

export default allReducers;
