import { expect } from 'chai';

import ActionTypes from '../src/actions/ActionTypes';
import * as actions from '../src/actions/Login';

describe('Actions::Login', function(){
	describe('#requestLogin()', function(){
		it('should return object with action type only', function() {
			let result = actions.requestLogin();
			expect(result).to.deep.equal({
				type: ActionTypes.REQUEST_LOGIN
  			});
		});
	});
	describe('#loginSuccessful(data)', function(){
		it('should return object with action type and login data', function() {
			let result = actions.loginSuccessful({});
			expect(result).to.deep.equal({
				type: ActionTypes.LOGIN_SUCCESS,
				data: {}
  			});
		});
	});
});
