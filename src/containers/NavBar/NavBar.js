import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { actions as authActions } from 'redux/reducers/auth';

import { Box, Button, Nav, Anchor, Image } from 'grommet';
import { Menu, Logout, Group } from 'grommet-icons';

import logoLiga from 'assets/laliga-logo-300x300.png';

import './NavBar.scss';

const AppBar = (props) => (
  <Box
    tag="NavBar"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    // style={{ zIndex: '1' }}
    background="brand"
    responsive
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const NavBar = (props) => {
  const { showSidebar, setShowSidebar, size } = props;

  const path = useSelector((state) => state.router.location.pathname);

  const dispatch = useDispatch();
  const logoutUser = () => dispatch(authActions.logoutUser());

  const isHomePage = path === '/';

  return (
    <AppBar>
      <Box height="xsmall" width="xsmall">
        <Image fit="contain" src={logoLiga} />
      </Box>
      <Box direction="row" pad="small">
        {size !== 'small' && !isHomePage && (
          <Nav direction="row" pad="small" flex align="center" aligContent="center">
            <Anchor icon={<Group />} label="Users" as={Link} to="/users" />
            <Button
              type="button"
              icon={<Logout color="accent-1" />}
              // label="Logout"
              color="accent-1"
              onClick={() => logoutUser()}
            />
          </Nav>
        )}
        {size === 'small' && (
          <Box>
            <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
          </Box>
        )}
      </Box>
    </AppBar>
  );
};

NavBar.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  size: PropTypes.string,
};

export default NavBar;
