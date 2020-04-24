import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { actions as usersActions } from 'redux/reducers/users';

import { API } from 'constants/api';

/**
 * @returns {object} Returns users list
 */
function getUsers() {
  return axios({
    method: 'get',
    url: `${API.USERS.GET_USERS}`,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    //   'Content-Type': 'application/json',
    //   'Accept-Language': language,
    // },
  });
}

export function* getUsersWorker() {
  try {
    const response = yield call(getUsers);

    if (response && response.data) {
      // const { clientes } = response.data;
      yield put(usersActions.successGetUsers(response.data));
    }
  } catch (error) {
    yield put(usersActions.errorGetUsers(error));
  }
}
