import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/StoreSetUp';
import { fetchApiData } from './redux/covid/Covid';

store.dispatch(fetchApiData);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
