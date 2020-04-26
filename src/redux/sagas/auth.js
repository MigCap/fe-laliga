import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { actions as authActions } from 'redux/reducers/auth';

import { API } from 'constants/api';

/**
 * @returns {object} Returns array with users list
 */
function loginUser(args) {
  const { loginData } = args;
  const { email, password } = loginData;
  return axios({
    method: 'post',
    url: `${API.LOGIN}`,
    data: {
      email,
      password,
    },
  });
}

export function* loginUserWorker(args) {
  try {
    let response = null;

    if (args && args.loginData) {
      const { loginData } = args;
      const params = {
        loginData,
      };
      response = yield call(loginUser, params);
    }

    if (response && response.data && response.data.token) {
      yield put(authActions.successLoginUser(response.data.token));
    }
  } catch (error) {
    yield put(authActions.errorLoginUser(error.response));
  }
}
