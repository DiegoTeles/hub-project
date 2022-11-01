import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './duck/rootReducer';
import rootSaga from './duck/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store
