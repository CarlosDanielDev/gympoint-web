import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  // console.tron.log('entrou na SignIN');
  const response = yield call(api.post, 'sessions', { email, password });
  // console.tron.log('chamou a API');
  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/students');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
