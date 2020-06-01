import { all, takeLatest } from 'redux-saga/effects';

import { ExampleTypes } from './example/types';
import { load } from './example/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ExampleTypes.EXAMPLE_LOADING, load)]);
}
