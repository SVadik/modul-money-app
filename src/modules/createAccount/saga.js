import { takeEvery, call, put } from "redux-saga/effects";
import { CREATE_ACCOUNT_REQUESTING } from "./constants";
import { accountsService } from "../api/accountApi";
import { getAccountsSuccess, getAccountsError } from "../accounts/actions";

export function* createAccountWatcher() {
  // while(true){
    yield takeEvery(CREATE_ACCOUNT_REQUESTING, createAccountWorker)
  // }
}

function* createAccountWorker () {
  try {
    const data = yield call(accountsService.createAccount)
    yield put(getAccountsSuccess(data))
    // yield put(setDisplayedAccount(data))
  } catch (error) {
    yield put(getAccountsError(error))
  } 
}

export default createAccountWatcher