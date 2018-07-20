const initialState = {
	pending: false,
	error: false,
	username: null,
	authenticated: false
};

export default function login(state = initialState, action) {
	switch (action.type) {
		case 'login_PENDING':
			console.log('login_PENDING');
			return {
				...state,
					pending: true,
					error: false,
					username: null,
					authenticated: false
			};
		case 'login_FULFILLED':
			console.log('login_FULFILLED');
			return {
				...state,
					pending: false,
					error: false,
					username: action.payload.username,
					authenticated: true
			};
		case 'login_REJECTED':
			console.log('login_REJECTED');
			return {
				...state,
					pending: false,
					error: action.payload.error,
					username: null,
					authenticated: false
			};
		case 'SIGNOUT':
			console.log('SIGNOUT');
			return {
				...state,
					pending: false,
					error: false,
					username: null,
					authenticated: false
			};
		case 'USERDATA_PENDING':
			console.log('USERDATA_PENDING');
			return {
				...state,
					pending: true,
					error: false,
					username: null,
					authenticated: false
			};
		case 'USERDATA_FULFILLED':
			console.log('USERDATA_FULFILLED');
			return {
				...state,
					pending: false,
					error: false,
					username: action.payload.username,
					authenticated: true
			};
		case 'USERDATA_REJECTED':
			console.log('USERDATA_REJECTED');
			return {
				...state,
					pending: false,
					error: action.payload.error,
					username: null,
					authenticated: false
			};
		default:
			return state;
	}
}
