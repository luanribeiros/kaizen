import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ExampleState } from './example/types';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

export interface ApplicationState {
  example: ExampleState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
