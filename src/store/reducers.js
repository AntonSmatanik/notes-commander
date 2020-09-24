export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message];
    case 'REMOVE_MESSAGE':
      return state.filter(m => m.timestamp !== action.message.timestamp);
    default:
      return state;
  }
};

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTES':
      state = action.notes;
      return state;
    case 'REMOVE_NOTES':
      state = [];
      return state;
    default:
      return state;
  }
};

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      state = action.note;
      return state;
    default:
      return state;
  }
};