import actionTypes from 'actionTypes';
import api from 'lib/api';

export function signUp(email, password, token) {
  const params = { email, password, token };
  return {
    type: actionTypes.SIGN_UP_OWNER,
    payload: api.post('/api/v1/owner/sign_up', params),
  };
}
