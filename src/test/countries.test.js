import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import narrativaAPI from './__mocks__/narrrativaAPI';
import store from '../redux/StoreSetUp';
import { loadData } from '../redux/covid/Covid';
import Home from '../components/HomePage';

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

  test('home must contain all countries', () => {
    renderWithRedux(<Home />);
    const CountryList = document.getElementById('CountryList');
    const firstCountry = CountryList.childNodes[0]
      .childNodes[0].childNodes[1].childNodes[0].textContent;
    expect(CountryList.childNodes.length).toBe(191);
    expect(firstCountry).toBe('Afghanistan');
  });

  test('first country is afghanistan', () => {
    renderWithRedux(<Home />);
    const CountryList = document.getElementById('CountryList');
    const firstCountry = CountryList.childNodes[0]
      .childNodes[0].childNodes[1].childNodes[0].textContent;
    expect(firstCountry).toBe('Afghanistan');
  });

  test('date input must have todays date', () => {
    renderWithRedux(<Home />);
    const dateInput = document.getElementById('dateInput');
    const todaysDate = new Date().toISOString().slice(0, 10);
    expect(dateInput.value).toBe(todaysDate);
  });

  test('adding text to the second input updates the country list', () => {
    const { getByPlaceholderText } = renderWithRedux(<Home />);
    fireEvent.change(getByPlaceholderText('Search by country name'), { target: { value: 'hondu' } });
    const CountryList = document.getElementById('CountryList');
    expect(CountryList.childNodes.length).toBe(1);
  });
});
