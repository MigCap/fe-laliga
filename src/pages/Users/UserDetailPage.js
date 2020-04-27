import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { actions as usersActions } from 'redux/reducers/users';

import { users } from 'utils/routes/routes';

import FlexContainer from 'components/FlexContainer/FlexContainer';

import { Box, Heading, Avatar, Form, FormField, TextInput, Text, Button } from 'grommet';
import { Trash, Previous } from 'grommet-icons';

import styled from 'styled-components';

import './UserDetailPage.scss';

const CustomForm = styled(Form)`
  width: 100%;
`;

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
  const deleteUser = (userId) => dispatch(usersActions.deleteUser(userId));
  const updateUserDetail = (userId, userData) =>
    dispatch(usersActions.updateUserDetail(userId, userData));

  useEffect(() => {
    if (params && params.userId) {
      dispatch(usersActions.getUserDetail(params.userId));
    }
  }, [dispatch, params]);

  useEffect(() => {
    if (getUserDetailSuccess && getUserDetailSuccess.data && !getUserDetailFetching) {
      setShowUserDetail(true);
      setUserValues(getUserDetailSuccess.data);
    }
  }, [getUserDetailSuccess, getUserDetailFetching]);

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
        <Box alignSelf="start" pad={{ left: 'small' }}>
          <Link type="button" to={users()}>
            <Button
              type="button"
              icon={<Previous color="accent-1" />}
              plain
              label={<Text color="accent-1">Volver</Text>}
            />
          </Link>
        </Box>
        <Box pad={{ top: 'xlarge', bottom: 'large' }}>
          <Avatar src={userValues.avatar} size="xlarge" />
        </Box>
        <FlexContainer
          direction="column"
          alignSelf="flex-start"
          margin="0 auto"
          padding="1rem 0"
          width="70%"
        >
          <CustomForm
            onSubmit={(e) => handleSubmitUserUpdate(e)}
            className="form__wrapper"
          >
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
            <Box direction="row" pad={{ top: 'medium' }}>
              <Button type="submit" primary label="Actualizar" fill />
            </Box>
            <Box direction="row" pad={{ top: 'medium' }} gap="medium">
              <Button
                type="button"
                primary
                label="Borrar usuario"
                icon={<Trash />}
                fill
                onClick={() => handleDeleteUser()}
              />
            </Box>
          </CustomForm>
        </FlexContainer>
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
