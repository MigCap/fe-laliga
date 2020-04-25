import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { actions as usersActions } from 'redux/reducers/users';

import { Box, DataTable, Text, Avatar, Button } from 'grommet';
import { User, Trash } from 'grommet-icons';

import './UsersListPage.scss';

export const UsersListPage = () => {
  const getUsersFetching = useSelector((state) => state.users.getUsersFetching);
  const getUsersSuccess = useSelector((state) => state.users.getUsersSuccess);
  // const getUsersError = useSelector((state) => state.users.getUsersError);

  const dispatch = useDispatch();
  const getUsers = () => dispatch(usersActions.getUsers());

  useEffect(() => {
    getUsers();
  }, []);

  const usersList = getUsersSuccess && getUsersSuccess.data;

  return (
    <Box
      flex
      align="start"
      alignSelf="start"
      justify="center"
      round="small"
      margin="small"
      pad="medium"
    >
      {usersList && !getUsersFetching && (
        <DataTable
          columns={[
            {
              property: 'avatar',
              header: (
                <Avatar background="dark-2">
                  <User color="light-1" />
                </Avatar>
              ),
              primary: true,
              render: (user) => (
                <Box pad={{ vertical: 'xsmall' }}>
                  <Avatar src={user.avatar} />
                </Box>
              ),
            },
            {
              property: 'first_name',
              header: <Text>First Name</Text>,
            },
            {
              property: 'last_name',
              header: 'Last Name',
            },
            {
              property: 'email',
              header: 'email',
            },
            {
              property: 'id',
              render: (user) => (
                <Button
                  icon={<Trash />}
                  onClick={() => {
                    console.log('DELETE ID ==> ', user.id);
                  }}
                />
              ),
            },
          ]}
          data={usersList}
        />
      )}
    </Box>
  );
};

// FlexContainer.propTypes = {}

export default compose(memo)(UsersListPage);
