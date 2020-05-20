import { all } from 'redux-saga/effects';
import LoginSaga from './modules/login/sagas'

function* rootSaga() {
  yield all([
    LoginSaga(),
  ]);
}

export default rootSaga;