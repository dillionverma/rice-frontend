const actionTypeNames = [
  'LOGIN_OWNER',
  'LOGIN_OWNER_SUCCESS',
  'LOGIN_OWNER_FAILURE',

  'LOGOUT_OWNER',

  'SIGN_UP_OWNER',
  'SIGN_UP_OWNER_SUCCESS',
  'SIGN_UP_OWNER_FAILURE',

  'AUTHENTICATE_OWNER',
  'AUTHENTICATE_OWNER_SUCCESS',
  'AUTHENTICATE_OWNER_FAILURE',

  'GET_ORDERS',
  'GET_ORDERS_PENDING',
  'GET_ORDERS_SUCCESS',
  'GET_ORDERS_FAILURE',

  'GET_ORDER',
  'GET_ORDER_PENDING',
  'GET_ORDER_SUCCESS',
  'GET_ORDER_FAILURE',

  'GET_MENUS',
  'GET_MENUS_PENDING',
  'GET_MENUS_SUCCESS',
  'GET_MENUS_FAILURE',

  'CREATE_MENU',
  'CREATE_MENU_PENDING',
  'CREATE_MENU_SUCCESS',
  'CREATE_MENU_FAILURE',

  'CREATE_MENU_CATEGORY',
  'CREATE_MENU_CATEGORY_PENDING',
  'CREATE_MENU_CATEGORY_SUCCESS',
  'CREATE_MENU_CATEGORY_FAILURE',

  'GET_TABLES',
  'GET_TABLES_SUCCESS',
  'GET_TABLES_FAILURE',

  'CREATE_TABLE',
  'CREATE_TABLE_SUCCESS',
  'CREATE_TABLE_FAILURE',
]

const actionTypes = actionTypeNames.reduce(
  (obj, actionTypeName) => ({
    ...obj,
    [actionTypeName]: actionTypeName,
  }),
  {},
);

export const failureActionTypes = actionTypeNames
  .map((a) => (/FAILURE/).test(a) ? a : null)
  .filter((a) => a != null)
  .reduce((obj, actionTypeName) => ({
    ...obj,
    [actionTypeName]: actionTypeName,
  }),
  {},
);

export const successActionTypes = actionTypeNames
  .map((a) => (/SUCCESS/).test(a) ? a : null)
  .filter((a) => a != null)
  .reduce((obj, actionTypeName) => ({
    ...obj,
    [actionTypeName]: actionTypeName,
  }),
  {},
);


export default actionTypes;
