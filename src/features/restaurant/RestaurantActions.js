import actionTypes from 'actionTypes';
import api from 'lib/api';

export function getTables() {
  return {
    type: actionTypes.GET_TABLES,
    payload: api.get('/api/v1/owner/tables'),
  };
}

export function createTable() {
  return {
    type: actionTypes.CREATE_TABLE,
    payload: api.post('/api/v1/owner/tables'),
  };
}
