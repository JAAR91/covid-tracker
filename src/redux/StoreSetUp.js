import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './covid/Covid';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logger),
);

export default store;
