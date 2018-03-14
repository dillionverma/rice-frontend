import actionTypes from 'actionTypes';
import api from 'lib/api';

export function getTables() {
  return {
    type: actionTypes.GET_TABLES,
    payload: api.get('/v1/owner/tables')
  }
}

export function createTable() {
  return {
    type: actionTypes.CREATE_TABLE,
    payload: api.post('/v1/owner/tables')
  }
}
