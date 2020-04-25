import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Box, Button, Heading, Nav, Anchor } from 'grommet';
import { Menu, Login, Group } from 'grommet-icons';

import './NavBar.scss';

const AppBar = (props) => (
  <Box
    tag="NavBar"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export const NavBar = (props) => {
  const { showSidebar, setShowSidebar, size } = props;

  return (
    <AppBar>
      <Heading level="3" margin="none" color="brand">
        FE LaLiga
      </Heading>
      <Box direction="row" pad="small">
        {size !== 'small' && (
          <Box>
            <Nav direction="row" pad="small">
              <Anchor icon={<Group />} label="Users" as={Link} to="/users" />
              <Anchor icon={<Login />} label="Login" as={Link} to="/" />
            </Nav>
          </Box>
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
