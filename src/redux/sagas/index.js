import { all, takeLatest } from 'redux-saga/effects';

import { types as usersTypes } from 'redux/reducers/users';

import * as usersSagas from 'redux/sagas/users';

export default function* rootSaga() {
  yield all([
    // USERS
    // Get Users
    takeLatest(usersTypes.GET_USERS_BEGINS, usersSagas.getUsersWorker),
    // Get User Detail
    takeLatest(usersTypes.GET_USER_DETAIL_BEGINS, usersSagas.getUserDetailWorker),
    // Delete User
    takeLatest(usersTypes.DELETE_USER_BEGINS, usersSagas.deleteUserWorker),
    // Update User Detail
    takeLatest(usersTypes.UPDATE_USER_DETAIL_BEGINS, usersSagas.updateUserDetailWorker),
  ]);
}
