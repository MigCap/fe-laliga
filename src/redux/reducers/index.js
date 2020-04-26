import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/appConfigUtils/history';

// REDUCERS
import authReducer from 'redux/reducers/auth';
import usersReducer from 'redux/reducers/users';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  router: connectRouter(history),
});

export default rootReducer;
