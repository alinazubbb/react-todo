import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/configureStore'
import { Provider } from 'react-redux';
import './index.css';

store.dispatch({type: 'INIT', payload: JSON.parse(localStorage.getItem('todos')).listState})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
