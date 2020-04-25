import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Box, Grommet, ResponsiveContext } from 'grommet';

import NavBar from 'containers/NavBar/NavBar';
import SideBar from 'containers/SideBar/SideBar';
import RoutesAndBoundaries from 'app/RoutesAndBoundaries/RoutesAndBoundaries';

import './App.scss';

const theme = {
  global: {
    // colors: {
    //   brand: '#228BE6',
    // },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full themeMode="dark">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <NavBar
              size={size}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
            <Box
              direction="row"
              flex
              overflow={{ horizontal: 'hidden' }}
              background="light-2"
            >
              <RoutesAndBoundaries />
              <SideBar
                size={size}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

// FlexContainer.propTypes = {}

export default App;