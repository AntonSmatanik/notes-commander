export const addMessage = (val) => ({
  type: 'ADD_MESSAGE',
  message: val,
});

export const removeMessage = (val) => ({
  type: 'REMOVE_MESSAGE',
  message: val,
});

export const addNotes = (val) => ({
  type: 'ADD_NOTES',
  notes: val,
});

export const removeNotes = () => ({
  type: 'REMOVE_NOTES',
});

export const addNote = (val) => ({
  type: 'ADD_NOTE',
  note: val,
});