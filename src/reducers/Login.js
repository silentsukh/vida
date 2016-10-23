import ActionTypes from '../actions/ActionTypes';

function login(state = { isAuthorizing: false }, action) {
	switch(action.type) {
		case ActionTypes.REQUEST_LOGIN:
			return { ...state, isAuthorizing: true, email: action.email, password: action.password };
		default:
			return state;
	}
}

export default login;