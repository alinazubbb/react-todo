import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history, store} from '../../store/configureStore';

import '../../index.css';

import Routes from '../Routes'

const list = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos')).listState
  : {};

store.dispatch({
  type: 'INIT',
  payload: { list }
});

class App extends Component {

	render() {
    console.log(history.location)
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Routes />
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
