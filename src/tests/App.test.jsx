import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../components/App';

const initialState = {
  messagesReducer: [],
  notesReducer: [],
  noteReducer: {},
};

test('check all headers', () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const { getByText } = render(<Provider store={store}><App /></Provider>);

  const messagesHeader = getByText(/HTTP requests/i);
  const notesHeader = getByText(/All notes/i);

  expect(messagesHeader).toBeInTheDocument();
  expect(notesHeader).toBeInTheDocument();
});
