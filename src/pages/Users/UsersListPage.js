import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { actions as usersActions } from 'redux/reducers/users';

import FlexContainer from 'components/FlexContainer/FlexContainer';

import { Box, DataTable, Text, Avatar } from 'grommet';
// import { User, Trash } from 'grommet-icons';

import './UsersListPage.scss';

export const UsersListPage = () => {
  const getUsersFetching = useSelector((state) => state.users.getUsersFetching);
  const getUsersSuccess = useSelector((state) => state.users.getUsersSuccess);
  // const getUsersError = useSelector((state) => state.users.getUsersError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, [dispatch]);

  const usersList = getUsersSuccess && getUsersSuccess.data;

  return (
    <FlexContainer alignSelf="flex-start" margin="0 auto" padding="1rem 0" width="80%">
      {usersList && !getUsersFetching && (
        <DataTable
          columns={[
            {
              property: 'avatar',
              primary: true,
              render: (user) => (
                <Box pad={{ vertical: 'xsmall' }}>
                  <Link to={`/users/${user.id}`}>
                    <Avatar src={user.avatar} />
                  </Link>
                </Box>
              ),
            },
            {
              property: 'first_name',
              header: <Text>First Name</Text>,
              render: (user) => (
                // <Anchor label={user.first_name} as={Link} to={`/users/${user.id}`} />
                <Link to={`/users/${user.id}`}>
                  <Text color="accent-1">Users</Text>
                </Link>
              ),
            },
            {
              property: 'last_name',
              header: 'Last Name',
            },
            {
              property: 'email',
              header: 'email',
            },
          ]}
          data={usersList}
        />
      )}
    </FlexContainer>
  );
};

// FlexContainer.propTypes = {}

export default compose(memo)(UsersListPage);
