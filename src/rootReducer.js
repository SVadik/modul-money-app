import { combineReducers } from 'redux';
import { loginReducer } from './modules/login/loginReducer'
import { accountsReducer } from './modules/accounts/accountsReducer'
import { createAccountReducer } from './modules/createAccount/createAccountReducer'
// import { authentication } from './modules/reducers/authenticationReducer';

const rootReducer = combineReducers({
  loginReducer,
  accountsReducer,
  createAccountReducer
});

export default rootReducer;