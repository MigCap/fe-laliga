import React from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { actions as authActions } from 'redux/reducers/auth';
import { USER_KEY } from 'constants/constants';

import { login } from 'utils/routes/routes';

import './LogoutPage.scss';

export default function LogoutPage() {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(authActions.logoutUser());

  logoutUser();
  window.localStorage.removeItem(USER_KEY);

  return <Redirect to={login()} />;
}
