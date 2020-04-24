import { all, takeLatest } from 'redux-saga/effects';

import { types as usersTypes } from 'redux/reducers/users';

import * as usersSagas from 'redux/sagas/users';

export default function* rootSaga() {
  yield all([
    // USERS
    takeLatest(usersTypes.GET_USERS_BEGINS, usersSagas.getUsersWorker),
  ]);
}
