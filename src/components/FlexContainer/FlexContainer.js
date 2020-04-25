import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { actions as usersActions } from 'redux/reducers/users';

import './FlexContainer.scss';

export const FlexContainer = () => (
  <div>
    <h1>FlexContainer</h1>
  </div>
);

// FlexContainer.propTypes = {}

export default compose(memo)(FlexContainer);
