import { combineReducers } from 'redux';

import usersReducer from './Users/reducers';
import gunsReducer from './Guns/reducers';
import ammoReducer from './Ammo/reducers';

const rootReducer = combineReducers({
  users: usersReducer,
  guns: gunsReducer,
  ammo: ammoReducer
});

export default rootReducer;
