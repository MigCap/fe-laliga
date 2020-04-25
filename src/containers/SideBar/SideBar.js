import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Box, Button, Collapsible, Layer, Nav, Anchor } from 'grommet';
import { FormClose, Group, Login } from 'grommet-icons';

import './SideBar.scss';

export const SideBar = (props) => {
  const { showSidebar, setShowSidebar, size } = props;

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
            <Anchor icon={<Group />} hoverIndicator label="Users" />
            <Anchor icon={<Login />} hoverIndicator label="Login" />
          </Nav>
        </Box>
      </Collapsible>
    );
  }

  return (
    <Layer>
      <Box background="light-2" tag="header" justify="end" align="center" direction="row">
        <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
      </Box>
      <Box fill background="light-2" align="center" justify="start" pad="medium">
        <Nav direction="column" pad="medium">
          <Box pad="medium">
            <Anchor icon={<Group />} hoverIndicator label="Users" as={Link} to="/users" />
          </Box>
          <Box pad="medium">
            <Anchor icon={<Login />} hoverIndicator label="Login" as={Link} to="/" />
          </Box>
        </Nav>
      </Box>
    </Layer>
  );
};

SideBar.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  size: PropTypes.string,
};

export default SideBar;
