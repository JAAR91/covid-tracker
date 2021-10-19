import { createStore, applyMiddleware } from 'redux';
import reducer, { fetchApiData } from './covid/Covid';

const store = createStore(
  reducer,
  applyMiddleware(fetchApiData),
);

export default store;
