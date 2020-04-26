import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { actions as authActions } from 'redux/reducers/auth';

import { Box, Heading, Form, FormField, TextInput, Button, Text } from 'grommet';
import { User, Lock } from 'grommet-icons';

import './LoginPage.scss';

export const LoginPage = () => {
  const [redirect, setRedirect] = useState(false);
  const [loginValues, setLoginValues] = useState({
    usuario: '',
    password: '',
  });

  const loginUserFetching = useSelector((state) => state.auth.loginUserFetching);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loginUserError = useSelector((state) => state.auth.loginUserError);

  const dispatch = useDispatch();
  const loginUser = (loginData) => dispatch(authActions.loginUser(loginData));

  // useEffect(() => {
  //   if (isAuthenticated && !loginUserFetching && !loginUserError) {
  //     setRedirect(true);
  //   }
  //   return () => setRedirect(false);
  // }, []);

  useEffect(() => {
    if (isAuthenticated && !loginUserFetching && !loginUserError) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { usuario, password } = loginValues;
    const loginData = {
      email: usuario,
      password,
    };
    loginUser(loginData);
  };

  if (redirect) {
    return <Redirect to="/users" />;
  }

  return (
    <Box pad="medium" flex align="center" alignContent="center">
      <Box pad="medium" alignSelf="center">
        <Heading level="3" color="accent-1">
          Login
        </Heading>
      </Box>
      <Box
        direction="row"
        margin="medium"
        pad="medium"
        flex
        align="start"
        alignContent="center"
        alignSelf="center"
        height="small"
      >
        <Form onSubmit={(e) => handleLogin(e)}>
          <FormField name="usuario" required>
            <TextInput
              name="usuario"
              value={loginValues.usuario}
              icon={<User />}
              placeholder="Usuario"
              onChange={(e) => handleInputChange(e)}
            />
          </FormField>
          <FormField name="password" required>
            <TextInput
              name="password"
              value={loginValues.password}
              icon={<Lock />}
              placeholder="Contraseña"
              onChange={(e) => handleInputChange(e)}
            />
          </FormField>
          <Box pad={{ top: 'medium' }}>
            <Text size="xsmall">
              Introduzca su nombre de usuario y contraseña para aceder
            </Text>
          </Box>
          <Box direction="row" pad={{ top: 'large' }} fill>
            <Button type="submit" primary label="Login" fill />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

// LoginPage.propTypes = {}

export default compose(memo)(LoginPage);
