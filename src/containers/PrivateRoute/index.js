import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, status, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			console.log('status', status);
			return status ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			);
		}}
	/>
);

export default PrivateRoute;
