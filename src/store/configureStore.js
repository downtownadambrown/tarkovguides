import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';

import rootReducer from '../models/rootReducer';
import rootSaga from '../models/rootSaga';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunk, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
