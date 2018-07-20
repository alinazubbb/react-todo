import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getUserData } from '../../actions/loginActions';
// import { signout } from '../../actions/loginActions';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login/';
import Signup from '../Signup';
import ToDoApp from '../ToDoApp';
import Input from '../../components/Input';

class Routes extends Component {
	componentDidMount() {
		console.log(0);
		const token = window.localStorage.getItem('token');
		this.props.getUserData(token);
	}

	render() {
    console.log(this.status)
		return (
			<div className="app">
        <Input type="checkbox" checked={this.props.status}/>
				<div>
					<Link to="/login">Login</Link>
					<Link to="/signup">Signup</Link>
					<Link to="/protected">Protected</Link>
				</div>
				<Route exact path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/" component={Start} />
				<PrivateRoute
					path="/protected"
					component={ToDoApp}
					status={this.props.status}
				/>
			</div>
		);
	}
}

const Start = () => <h3>Start Page</h3>;

export default compose(
	withRouter,
	connect(
		({ loginState }) => ({ status: loginState.authenticated }),
		{ getUserData }
	)
)(Routes);
