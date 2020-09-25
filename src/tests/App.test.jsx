import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTests';

import App from '../components/App';

const initialReduxState = {
  messagesReducer: [],
  notesReducer: [],
  noteReducer: {},
};

const renderWrappedApp = (reduxState) => {
  const mockStore = configureStore();
  const store = mockStore(reduxState);

  return (
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    )
  )
};

test('should have header texts', () => {
  renderWrappedApp(initialReduxState);

  const messagesHeader = screen.getByText(/HTTP requests/i);
  const notesHeader = screen.getByText(/All notes/i);

  expect(messagesHeader).toBeInTheDocument();
  expect(notesHeader).toBeInTheDocument();
});

test('should have spinner', () => {
  renderWrappedApp(initialReduxState);

  const spinner = screen.getByTestId('spinner');

  expect(spinner).toBeInTheDocument();
});

test('should have table with notes', () => {
  const reduxStateWithNotes = {
    messagesReducer: [],
    notesReducer: [{
      id: 1,
      title: 'test1',
    }, {
      id: 2,
      title: 'test2',
    }, {
      id: 3,
      title: 'test3',
    }],
    noteReducer: {},
  };

  renderWrappedApp(reduxStateWithNotes);

  const table = screen.getByTestId('table');

  expect(table).toBeInTheDocument();
});

test('should have 3 messages', () => {
  const reduxStateWithMessages = {
    messagesReducer: [{
      endpoint: "notes",
      method: "GET",
      type: "success",
      status: 200,
      body: "OK",
      timestamp: 1600959046440
    }, {
      endpoint: "notes/1",
      method: "GET",
      type: "success",
      status: 200,
      body: "OK",
      timestamp: 1600959046441
    }, {
      endpoint: "notes/2",
      method: "GET",
      type: "success",
      status: 200,
      body: "OK",
      timestamp: 1600959046442
    }],
    notesReducer: [],
    noteReducer: {},
  };

  renderWrappedApp(reduxStateWithMessages);

  reduxStateWithMessages.messagesReducer.every(e =>
    expect(screen.getByTestId(`message-${e.timestamp}-${e.method}`)).toBeInTheDocument()
  );
});