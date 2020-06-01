import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { exampleSuccess, exampleError } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/luanribeiros/repos');

    yield put(exampleSuccess(response.data));
  } catch (err) {
    yield put(exampleError());
  }
}
