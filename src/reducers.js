import { combineReducers } from 'redux';

import { authentication } from './modules/reducers/authenticationReducer';
import { users } from './modules/reducers/usersReducer';

const rootReducer = combineReducers({
  authentication,
  users
});

export default rootReducer;