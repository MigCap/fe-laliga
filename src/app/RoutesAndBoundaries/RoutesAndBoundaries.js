import React, { lazy } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import RequireAuth from 'app/RequireAuth/RequireAuth';

import { login, logout, users, userDetail } from 'utils/routes/routes';

import './RoutesAndBoundaries.scss';

const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const LogoutPage = lazy(() => import('pages/Logout/LogoutPage'));
const UsersListPage = lazy(() => import('pages/Users/UsersListPage'));
const UserDetailPage = lazy(() => import('pages/Users/UserDetailPage'));

export default function RoutesAndBoundaries() {
  return (
    <Switch>
      <Route exact path={login()} component={LoginPage} />
      <Route exact path={logout()} component={LogoutPage} />
      <Route
        exact
        path={userDetail()}
        render={(props) => <RequireAuth {...props} Component={UserDetailPage} />}
      />
      <Route
        exact
        path={users()}
        render={(props) => <RequireAuth {...props} Component={UsersListPage} />}
      />
    </Switch>
  );
}

// FlexContainer.propTypes = {}
