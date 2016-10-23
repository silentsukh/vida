import ActionTypes from './ActionTypes';

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

	}
}