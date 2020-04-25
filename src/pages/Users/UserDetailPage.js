import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { actions as usersActions } from 'redux/reducers/users';

import { Box, Heading, Avatar, Form, FormField, TextInput, Button } from 'grommet';
import { Trash } from 'grommet-icons';

import './UserDetailPage.scss';

export const UserDetailPage = (props) => {
  const { match } = props;
  const { params } = match;

  const [redirect, setRedirect] = useState(false);
  const [showUserDetail, setShowUserDetail] = useState(false);
  const [userValues, setUserValues] = useState({});

  const getUserDetailFetching = useSelector((state) => state.users.getUserDetailFetching);
  const getUserDetailSuccess = useSelector((state) => state.users.getUserDetailSuccess);
  // const getUserDetailError = useSelector((state) => state.users.getUserDetailError);

  const dispatch = useDispatch();
  const getUserDetail = (userId) => dispatch(usersActions.getUserDetail(userId));
  const deleteUser = (userId) => dispatch(usersActions.deleteUser(userId));
  const updateUserDetail = (userId, userData) =>
    dispatch(usersActions.updateUserDetail(userId, userData));

  useEffect(() => {
    if (params && params.userId) {
      getUserDetail(params.userId);
    }
  }, []);

  useEffect(() => {
    if (getUserDetailSuccess && getUserDetailSuccess.data && !getUserDetailFetching) {
      setShowUserDetail(true);
      setUserValues(getUserDetailSuccess.data);
    }
  }, [getUserDetailSuccess]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const handleDeleteUser = () => {
    deleteUser(userValues.id);
    setRedirect(true);
  };

  const handleSubmitUserUpdate = (e) => {
    e.preventDefault();
    const { id, first_name, last_name, email } = userValues;
    const userData = {
      first_name,
      last_name,
      email,
    };
    updateUserDetail(id, userData);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/users" />;
  }

  if (showUserDetail) {
    return (
      <Box pad="medium" flex align="center">
        <Box pad="medium">
          <Avatar src={userValues.avatar} size="large" />
        </Box>
        <Box direction="row" pad="medium" flex align="start">
          <Form onSubmit={(e) => handleSubmitUserUpdate(e)}>
            <FormField name="first_name" label="First Name">
              <TextInput
                name="first_name"
                value={userValues.first_name}
                onChange={(e) => handleInputChange(e)}
              />
            </FormField>
            <FormField name="last_name" label="Last Name">
              <TextInput
                name="last_name"
                value={userValues.last_name}
                onChange={(e) => handleInputChange(e)}
              />
            </FormField>
            <FormField name="email" label="Email">
              <TextInput
                name="email"
                value={userValues.email}
                onChange={(e) => handleInputChange(e)}
              />
            </FormField>
            <Box direction="row" gap="medium" pad="medium">
              <Button type="submit" primary label="Actualizar" />
              <Link type="button" to="/users">
                <Button type="button" label="Volver" />
              </Link>
            </Box>
            <Box direction="row" pad="medium">
              <Button
                type="button"
                primary
                label="Borrar usuario"
                icon={<Trash />}
                fill
                onClick={() => handleDeleteUser()}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    );
  }
  return (
    <Box pad="medium" flex align="center">
      <Heading level="3" margin="none" color="brand">
        Loading ...
      </Heading>
    </Box>
  );
};

UserDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default compose(memo)(UserDetailPage);
