import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ACCOUNTS_REQUEST } from "./constants";
import { accountsService } from "../api/accountApi";
import { getAccountsSuccess, getAccountsError } from './actions'
export function* accountsWatcher() {
  // while(true){
    yield takeEvery(GET_ACCOUNTS_REQUEST, accountsWorker)
  // }
}

function* accountsWorker () {
  try {
    const data = yield call(accountsService.fetchAccounts)
    yield put(getAccountsSuccess(data))
  } catch (error) {
    yield put(getAccountsError(error))
  } 
}

export default accountsWatcher