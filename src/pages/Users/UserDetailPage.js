import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { actions as usersActions } from 'redux/reducers/users';

import './UserDetailPage.scss';

export const UserDetailPage = () => (
  <div>
    <h1>UserDetailPage</h1>
  </div>
);

// UserDetailPage.propTypes = {}

export default compose(memo)(UserDetailPage);
