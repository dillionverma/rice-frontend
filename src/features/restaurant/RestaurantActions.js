import { GET_TABLES, CREATE_TABLE } from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';

export function getTablesAction(json) {
  return {
    type: GET_TABLES,
    tables: json.tables
  };
}

export function createTableAction(json) {
  return {
    type: CREATE_TABLE,
    table: json.table
  };
}

export function getTables() {
  return dispatch => {
    return api.get('/api/v1/owner/tables')
              .then(({data})   => dispatch(getTablesAction(data)))
              .catch(error     => errorHandler(error));
  };
}

export function createTable() {
  return dispatch => {
    return api.post('/api/v1/owner/tables')
              .then(({data})   => dispatch(createTableAction(data)))
              .catch(error     => {
                errorHandler(error)
              });
  };
}
