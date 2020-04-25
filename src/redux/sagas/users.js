import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { actions as usersActions } from 'redux/reducers/users';

import { API } from 'constants/api';

/**
 * @returns {object} Returns array with users list
 */
function getUsers() {
  return axios({
    method: 'get',
    url: `${API.USERS}`,
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
      yield put(usersActions.successGetUsers(response.data));
    }
  } catch (error) {
    yield put(usersActions.errorGetUsers(error.response));
  }
}

/**
 * @returns {object} Returns object with user detail
 */
function getUserDetail(args) {
  const { userId } = args;
  return axios({
    method: 'get',
    url: `${API.USERS}/${userId}`,
  });
}

export function* getUserDetailWorker(args) {
  try {
    let response = null;

    if (args && args.userId) {
      const { userId } = args;
      const params = { userId };
      response = yield call(getUserDetail, params);
    }

    if (response && response.data) {
      yield put(usersActions.successGetUserDetail(response.data));
    }
  } catch (error) {
    yield put(usersActions.errorGetUserDetail(error.response));
  }
}

/**
 * @returns {object}
 */
function deleteUser(args) {
  const { userId } = args;
  return axios({
    method: 'delete',
    url: `${API.USERS}/${userId}`,
  });
}

export function* deleteUserWorker(args) {
  try {
    let response = null;

    if (args && args.userId) {
      const { userId } = args;
      const params = { userId };
      response = yield call(deleteUser, params);
    }

    if (response && response.data) {
      yield put(usersActions.successDeleteUser(response.data));
    }
  } catch (error) {
    yield put(usersActions.errorDeleteUser(error.response));
  }
}

/**
 * @returns {object}
 */
function updateUserDetail(args) {
  const { userId, userData } = args;
  return axios({
    method: 'put',
    url: `${API.USERS}/${userId}`,
    data: {
      ...userData,
    },
  });
}

export function* updateUserDetailWorker(args) {
  try {
    let response = null;

    if (args && args.userId && args.userData) {
      const { userId, userData } = args;
      const params = {
        userId,
        userData,
      };
      response = yield call(updateUserDetail, params);
    }

    if (response && response.data) {
      yield put(usersActions.successUpdateUserDetail(response.data));
    }
  } catch (error) {
    yield put(usersActions.errorUpdateUserDetail(error.response));
  }
}
