import { combineReducers } from 'redux';
import { messagesReducer, notesReducer } from './reducers';

const allReducers = combineReducers({
  messagesReducer,
  notesReducer,
});

export default allReducers;
