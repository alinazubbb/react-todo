export function login(data, cb) {
	return dispatch => {
		dispatch(loginPending());
		return fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok === false) {
					throw new Error('Error');
				}
				return res.json();
			})
			.then(content => {
				console.log('content', content);
				dispatch(loginFulfilled(content));
				localStorage.setItem('token', content.token);
				return content;
			})
			.catch(error => dispatch(loginRejected(error.message)));
	};
}

export const loginPending = () => {
	return { type: 'login_PENDING' };
};

export const loginFulfilled = ({ username, authenticated }) => {
	return {
		type: 'login_FULFILLED',
		payload: { username, authStatus: authenticated }
	};
};

export const loginRejected = error => {
	return { type: 'login_REJECTED', payload: { error } };
};

export const signout = () => {
	return { type: 'SIGNOUT' };
};

// ////////////////////////


export const fetchPending = () => {
	return { type: 'USERDATA_PENDING' };
};

export const fetchFulfilled = ({ username, authenticated }) => {
	return { type: 'USERDATA_FULFILLED', payload: { username, authenticated } };
};

export const fetchRejected = error => {
	return { type: 'USERDATA_REJECTED', payload: { error } };
};

export function getUserData(token) {
	console.log('getUserData', token);
	return dispatch => {
		dispatch(fetchPending());
		return fetch('http://localhost:4000/getuserdata', {
			method: 'GET',
			headers: {
				'x-authorization-token': `bearer ${token}`
			}
		})
			.then(res => {
				if (res.ok === false) {
					throw new Error('Error');
				}
				return res.json();
			})
			.then(content => {
        console.log('!content',content)
				dispatch(fetchFulfilled(content));
				return;
			})
			.catch(error => dispatch(fetchRejected(error.message)));
	};
}

