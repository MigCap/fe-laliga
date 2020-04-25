import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Switch, Route } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import UsersListPage from 'pages/Users/UsersListPage';

import './RoutesAndBoundaries.scss';

export const RoutesAndBoundaries = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/users" component={UsersListPage} />
  </Switch>
);

// FlexContainer.propTypes = {}

export default compose(memo)(RoutesAndBoundaries);
