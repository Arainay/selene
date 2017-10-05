import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gateway from './gateway';

export default combineReducers({
  gateway,
  routerReducer
});