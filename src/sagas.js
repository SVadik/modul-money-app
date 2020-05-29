import { all } from 'redux-saga/effects';
import LoginSaga from './modules/login/saga'
import AccountsSaga from './modules/accounts/saga'
import CreateAccountSaga from './modules/createAccount/saga'

function* rootSaga() {
  yield all([
    LoginSaga(),
    AccountsSaga(),
    CreateAccountSaga()
  ]);
}

export default rootSaga;