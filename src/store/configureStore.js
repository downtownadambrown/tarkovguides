import Raven from 'raven-js';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import createRavenMiddleware from "raven-for-redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../models/rootReducer';
import rootSaga from '../models/rootSaga';

export default function configureStore(preloadedState) {
  Raven.config('https://f196c7d628df4154ab2d434f8216ed80@sentry.io/1532258').install();
  const sagaMiddleware = createSagaMiddleware();
  const ravenMiddleware = createRavenMiddleware(Raven);

  const logger = createLogger({
    collapsed: true
  });

  const middlewares = [
    thunk,
    sagaMiddleware,
    ravenMiddleware,
    logger
  ];

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
