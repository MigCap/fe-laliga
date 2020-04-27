import React, { useState, Suspense } from 'react';
// import PropTypes from 'prop-types';

// import { ThemeProvider } from 'styled-components';

import { Box, Grommet, ResponsiveContext } from 'grommet';

import Loader from 'components/Loader/Loader';

import NavBar from 'containers/NavBar/NavBar';
import SideBar from 'containers/SideBar/SideBar';
import RoutesAndBoundaries from 'app/RoutesAndBoundaries/RoutesAndBoundaries';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

import './App.scss';

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Grommet theme={theme} full themeMode="dark">
        <ResponsiveContext.Consumer>
          {(size) => (
            <Suspense fallback={<Loader />}>
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
    </>
  );
};

// App.propTypes = {}

export default App;
