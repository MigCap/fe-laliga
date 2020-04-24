import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { actions as usersActions } from 'redux/reducers/users';

import {
  Box,
  Button,
  Heading,
  List,
  Collapsible,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Menu } from 'grommet-icons';

import './App.scss';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  // const contentArray = Array(20).fill('content');

  const getUsersFetching = useSelector((state) => state.users.getUsersFetching);
  const getUsersSuccess = useSelector((state) => state.users.getUsersSuccess);
  // const getUsersError = useSelector((state) => state.users.getUsersError);

  console.log(getUsersSuccess);

  const dispatch = useDispatch();
  const getUsers = () => dispatch(usersActions.getUsers());

  useEffect(() => {
    getUsers();
    // return () => {
    //   cleanup
    // }
  }, []);

  const usersList = getUsersSuccess && getUsersSuccess.data;

  return (
    <Grommet theme={theme} full themeMode="dark">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none" color="light-1">
                FE LaLiga
              </Heading>
              <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box
                flex
                align="start"
                alignSelf="start"
                justify="center"
                round="samll"
                margin="small"
              >
                {usersList && !getUsersFetching && (
                  <List
                    primaryKey="first_name"
                    secondaryKey="last_name"
                    data={usersList}
                    alignSelf="start"
                  />
                )}
              </Box>
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
