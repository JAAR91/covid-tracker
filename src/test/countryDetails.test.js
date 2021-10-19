import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import narrativaAPI from './__mocks__/narrrativaAPI';
import store from '../redux/StoreSetUp';
import { loadData } from '../redux/covid/Covid';
import App from '../App';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});

describe('Country components test', () => {
  beforeEach(() => {
    store.dispatch(loadData(narrativaAPI));
  });

  test('When clicking on the country this will load that country details page', () => {
    const { getByText } = renderWithRedux(<App />);
    fireEvent.click(getByText('Afghanistan'));
    expect(getByText('Source: John Hopkins University') !== null).toBe(true);
  });

  test('Countries without cities informations shows a message', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('No cities information found!') !== null).toBe(true);
  });

  test('Countries without cities informations shows a message', () => {
    const { getByText, getByTestId } = renderWithRedux(<App />);
    fireEvent.click(getByTestId('backButton'));
    fireEvent.click(getByText('Spain'));
    expect(getByText('C. Valenciana') !== null).toBe(true);
    expect(getByText('La Rioja') !== null).toBe(true);
    expect(getByText('Cataluña') !== null).toBe(true);
  });
});
