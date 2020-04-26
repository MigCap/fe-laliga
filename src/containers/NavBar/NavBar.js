import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { login, logout, users } from 'utils/routes/routes';

import { Box, Button, Nav, Image, Text } from 'grommet';
import { Menu } from 'grommet-icons';

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
    background="brand"
    responsive
    {...props}
  />
);

export const NavBar = (props) => {
  const { showSidebar, setShowSidebar, size } = props;

  const [isHomePage, setIsHomePage] = useState(false);
  const path = useSelector((state) => state.router.location.pathname);

  useEffect(() => {
    if (path === login()) {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [path]);

  return (
    <AppBar>
      <Box height="xsmall" width="xsmall">
        <Image fit="contain" src={logoLiga} />
      </Box>
      <Box direction="row" pad="small">
        {size !== 'small' && !isHomePage && (
          <Nav direction="row" pad="small" flex align="center" aligContent="center">
            {/* <Anchor href={users()} color="accent-1">
              Users
            </Anchor> */}
            <Link to={users()}>
              <Text color="accent-1">Users</Text>
            </Link>
            <Link to={logout()}>
              <Text color="accent-1">Logout</Text>
            </Link>
          </Nav>
        )}
        {size === 'small' && !isHomePage && (
          <Box>
            <Button
              icon={<Menu color="white" />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
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
