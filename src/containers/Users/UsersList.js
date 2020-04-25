import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { actions as usersActions } from 'redux/reducers/users';

import './UsersList.scss';

export const UsersList = () => (
  <div>
    <h1>UsersList</h1>
  </div>
);

// UsersList.propTypes = {}

export default compose(memo)(UsersList);
