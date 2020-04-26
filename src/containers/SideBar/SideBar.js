import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { login, logout, users } from 'utils/routes/routes';

import { Box, Button, Collapsible, Layer, Nav, Text } from 'grommet';
import { FormClose, Group, Logout } from 'grommet-icons';

import './SideBar.scss';

export const SideBar = (props) => {
  const { showSidebar, setShowSidebar, size } = props;

  const [isHomePage, setIsHomePage] = useState(false);
  const path = useSelector((state) => state.router.location.pathname);
  useEffect(() => {
    if (path === login()) {
      setIsHomePage(true);
    }
  }, [path]);

  if (!showSidebar || size !== 'small') {
    return (
      <Collapsible direction="horizontal" open={showSidebar}>
        <Box
          flex
          width="medium"
          background="light-2"
          elevation="small"
          align="end"
          justify="start"
          pad="medium"
        >
          <Nav direction="column" pad="small">
            <Link to={users()}>
              <Box gap="small" flex direction="row">
                <Group color="accent-1" />
                <Text color="accent-1">Users</Text>
              </Box>
            </Link>
            <Link to={logout()}>
              <Box gap="small" flex direction="row">
                <Logout color="accent-1" />
                <Text color="accent-1">Users</Text>
              </Box>
            </Link>
          </Nav>
        </Box>
      </Collapsible>
    );
  }

  if (!isHomePage) {
    return (
      <Layer>
        <Box background="brand" tag="header" justify="end" align="center" direction="row">
          <Button
            icon={<FormClose color="accent-1" size="large" />}
            margin="medium"
            onClick={() => setShowSidebar(false)}
          />
        </Box>
        <Box
          fill
          background="brand"
          align="center"
          justify="start"
          pad={{ top: 'medium' }}
        >
          <Nav direction="column" pad={{ top: 'xlarge' }} gap="xlarge">
            <Link to={users()}>
              <Box gap="small" flex direction="row">
                <Group color="accent-1" />
                <Text color="accent-1">Users</Text>
              </Box>
            </Link>
            <Link to={logout()}>
              <Box gap="small" flex direction="row">
                <Logout color="accent-1" />
                <Text color="accent-1">Logout</Text>
              </Box>
            </Link>
          </Nav>
        </Box>
      </Layer>
    );
  }

  return null;
};

SideBar.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  size: PropTypes.string,
};

export default SideBar;
