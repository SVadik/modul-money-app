
import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_ERROR,
  SET_DISPLAYED_ACCOUNT,
} from './constants'

export const getAccountsRequest = () => ({
  type: GET_ACCOUNTS_REQUEST
})

export const getAccountsSuccess = payload => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload
})

export const getAccountsError = payload => ({
  type: GET_ACCOUNTS_ERROR,
  payload
})

export const setDisplayedAccount = payload => ({
  type: SET_DISPLAYED_ACCOUNT,
  payload
})

