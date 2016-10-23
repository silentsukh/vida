import ActionTypes from '../src/actions/ActionTypes';
import { requestLogin } from '../src/actions/Login';

describe('Actions::Login', function(){
	describe('#login(email, password)', function(){
		it('should return data without error', function() {
			expect(JSON.parse(requestLogin('test@vida.co.uk','ForTheLoveOfTest'))).to.deep.equal({
				data: {
					id: "",
					type: "session",
					attributes: {
						role: {
							name: "staff_member",
							id: 4
						},
						key: "test@vida.co.uk",
						token: "dY9hj329VWfbLAitv5s8"
					}
				}
  			});
		});
	});
});