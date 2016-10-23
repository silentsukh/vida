import ActionTypes from './ActionTypes';

export function requestLogin(email, password) {
	return {
		type: ActionTypes.REQUEST_LOGIN,
		email,
		password
	}
}