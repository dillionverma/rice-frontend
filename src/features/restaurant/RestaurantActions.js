import { GET_RESTAURANT_TABLES } from '../../actionTypes';
import api from '../../lib/api';
import { errorHandler } from '../../lib/errorHandler';

export function getTablesAction(json) {
  return {
    type: GET_RESTAURANT_TABLES,
    tables: json.tables
  };
}

export function getTables() {
  return dispatch => {
    return api.get('/api/v1/owner/tables')
              .then(({data})   => dispatch(getTablesAction(data)))
              .catch(error     => {
                errorHandler(error)
              });
  };
}
