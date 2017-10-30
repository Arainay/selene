import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import configureStore, { sagaMiddleware } from './store/configureStore';
import App from './containers/App';
import rootSaga from './sagas';

const store = configureStore();
const history = createBrowserHistory();
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);