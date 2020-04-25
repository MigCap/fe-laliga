import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { actions as usersActions } from 'redux/reducers/users';

import { Box, Heading } from 'grommet';

import './LoginPage.scss';

export const LoginPage = () => (
  <Box pad="medium">
    <Heading level="3" margin="none" color="brand">
      LoginPage
    </Heading>
  </Box>
);

// LoginPage.propTypes = {}

export default compose(memo)(LoginPage);
