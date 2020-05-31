import { take, call, put, cancel, fork, cancelled } from "redux-saga/effects";
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./constants";
import { userService } from "../api/loginApi";

export function* loginWatcher() {
  while(true){
    const actionResult = yield take(LOGIN_REQUESTING)
    const { username, password } = actionResult.payload;
    const task = yield fork(loginWorker, username, password)
    const action = yield take([LOGOUT, LOGIN_ERROR])
    if(action.type === LOGOUT)
      yield cancel(task)
    yield call(userService.logout)
  }
}

function* loginWorker (username, password) {
  let token
  try {
    token = yield call(userService.login, username, password)
    localStorage.setItem('token', JSON.stringify(token))
    yield put({ type: LOGIN_SUCCESS })
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error })
  } finally {
    if (yield cancelled()) {
    }
  }
  return token
}

export default loginWatcher