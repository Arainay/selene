import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

const middleware = routerMiddleware(createBrowserHistory());

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(middleware));
}