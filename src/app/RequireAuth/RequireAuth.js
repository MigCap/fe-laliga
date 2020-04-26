import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { USER_KEY } from 'constants/constants';
import { login } from 'utils/routes/routes';

export default function RequireAuth(props) {
  const { Component } = props;
  if (!window.localStorage.getItem(USER_KEY)) {
    return <Redirect to={login()} />;
  }
  return <Component {...props} />;
}

RequireAuth.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
