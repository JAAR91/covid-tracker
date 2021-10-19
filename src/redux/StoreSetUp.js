import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer, { fetchApiData } from './covid/Covid';

const store = createStore(
  reducer,
  applyMiddleware(fetchApiData, logger),
);

export default store;
