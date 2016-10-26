import ActionTypes from './ActionTypes';
import fetch from 'isomorphic-fetch';

export function requestLogin() {
	return {
		type: ActionTypes.REQUEST_LOGIN
	}
}

export function loginSuccessful(data) {
	return {
		type: ActionTypes.LOGIN_SUCCESS,
		data
	}
}

export function loginFailed(errors) {
	return {
		type: ActionTypes.LOGIN_SUCCESS,
		errors
	}
}

//Add async action creator here
export function login(email, password) {
	return (dispatch) => {
		dispatch(requestLogin());

		let result = fetch('https://vida-core-production.herokuapp.com/api/sessions', {
			method: 'POST',
			body: {
			  "api_user": {
			    "email": email,
			    "password": password
			  }
			}
		})
		.then(response => {
			if (response.status >= 400) {
				console.error(response.status);
				return dispatch(loginFailed(response.status));
			}
			return response.json();
		})
		.then(data => {
			return dispatch(loginSuccessful(data));
		});
	}
}