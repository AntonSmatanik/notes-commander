export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      state = [...state, action.message];
      return state;
    case 'REMOVE_MESSAGE':
      state = state.filter(m => m.timestamp !== action.message.timestamp);
      return state;
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
