import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/appConfigUtils/history';

// REDUCERS
import usersReducer from 'redux/reducers/users';

const rootReducer = combineReducers({
  users: usersReducer,
  router: connectRouter(history),
});

export default rootReducer;
