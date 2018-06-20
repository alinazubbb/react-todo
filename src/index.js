import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import App from './containers/App';
import Page1 from './containers/Page1';
import Page2 from './components/Page2';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';


const list = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos')).listState
  : {};

store.dispatch({
  type: 'INIT',
  payload: { list }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={App} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
