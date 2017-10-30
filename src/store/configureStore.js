import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

const routeMiddleware = routerMiddleware(createBrowserHistory());
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(routeMiddleware, sagaMiddleware));
}

export { sagaMiddleware };