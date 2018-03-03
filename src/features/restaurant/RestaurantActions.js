import { GET_RESTAURANT_TABLES } from '../../actionTypes';
import api from '../../lib/api';

export function getTablesAction(json) {
  return {
    type: GET_RESTAURANT_TABLES, 
    tables: json.tables
  };
}


export function getTables() {
  return dispatch => {
    return api.get('/api/v1/owner/tables')
              .then(handleResponse)
              .then(response => response.json())
              .then(json     => dispatch(getTablesAction(json)))
              .catch(error   => console.log(error.message));
  };
}

function handleResponse(response) {
  if (!response.ok) {
    throw Error("Error")
  }
  return response;
}
