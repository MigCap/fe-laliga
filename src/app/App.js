import React, { useState, Suspense } from 'react';
// import PropTypes from 'prop-types';

import { Box, Grommet, ResponsiveContext, Heading } from 'grommet';

import NavBar from 'containers/NavBar/NavBar';
import SideBar from 'containers/SideBar/SideBar';
import RoutesAndBoundaries from 'app/RoutesAndBoundaries/RoutesAndBoundaries';

import './App.scss';

const theme = {
  global: {
    colors: {
      brand: 'rgb(10, 25, 47)',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    focus: {
      border: {
        color: 'none',
      },
    },
  },
};

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full themeMode="dark">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Suspense
            fallback={
              <Box
                direction="row"
                flex
                overflow={{ horizontal: 'hidden' }}
                background="brand"
              >
                <Heading level="3" margin="none" color="brand">
                  Loading ...
                </Heading>
              </Box>
            }
          >
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
                background="brand"
              >
                <RoutesAndBoundaries />
                <SideBar
                  size={size}
                  showSidebar={showSidebar}
                  setShowSidebar={setShowSidebar}
                />
              </Box>
            </Box>
          </Suspense>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

// App.propTypes = {}

export default App;
