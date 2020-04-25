import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { actions as usersActions } from 'redux/reducers/users';

import { Box, Heading, Form, FormField, TextInput, Button } from 'grommet';
// import { Trash } from 'grommet-icons';

import './LoginPage.scss';

export const LoginPage = () => {
  const [redirect, setRedirect] = useState(false);
  const [loginValues, setLoginValues] = useState({
    usuario: '',
    password: '',
  });

  // const getUserDetailSuccess = useSelector((state) => state.users.getUserDetailSuccess);

  // const dispatch = useDispatch();
  // const getUserDetail = (userId) => dispatch(usersActions.getUserDetail(userId));

  // useEffect(() => {
  //   if (params && params.userId) {
  //     getUserDetail(params.userId);
  //   }
  // }, []);

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
    // const { usuario, password } = loginValues;
    console.log(loginValues);
    // const userData = {
    //   usuario,
    //   password,
    // };
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/users" />;
  }

  return (
    <Box pad="medium">
      <Heading level="3" margin="none" color="brand">
        LoginPage
      </Heading>
      <Box direction="row" pad="medium" flex align="start">
        <Form onSubmit={(e) => handleLogin(e)}>
          <FormField name="usuario" label="Usuario">
            <TextInput
              name="usuario"
              value={loginValues.usuario}
              onChange={(e) => handleInputChange(e)}
            />
          </FormField>
          <FormField name="password" label="Contraseña">
            <TextInput
              name="password"
              value={loginValues.password}
              onChange={(e) => handleInputChange(e)}
            />
          </FormField>
          <Box direction="row" pad="medium">
            <Button type="submit" primary label="Login" fill />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

// LoginPage.propTypes = {}

export default compose(memo)(LoginPage);
