
import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  ACCOUNTS_ERROR,
  SET_DISPLAYED_ACCOUNT,
  FILL_ACCOUNT_REQUEST,
  FILL_ACCOUNT_SUCCESS,
} from './constants'

export const getAccountsRequest = () => ({
  type: GET_ACCOUNTS_REQUEST
})

export const getAccountsSuccess = payload => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload
})

export const getAccountsError = payload => ({
  type: ACCOUNTS_ERROR,
  payload
})

export const setDisplayedAccount = payload => ({
  type: SET_DISPLAYED_ACCOUNT,
  payload
})

export const fillAccountRequest = payload => ({
  type: FILL_ACCOUNT_REQUEST,
  payload
})

export const fillAccountSuccess = payload => ({
  type: FILL_ACCOUNT_SUCCESS,
  payload
})

export const fillAccountError = payload => ({
  type: ACCOUNTS_ERROR,
  payload
})

