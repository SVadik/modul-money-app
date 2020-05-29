import { CREATE_ACCOUNT_REQUESTING, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR } from './constants'

const initialState = {
  requesting: false,
  successful: false,
  errors: []
}

export const createAccountReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ACCOUNT_REQUESTING:
      return {
        requesting: true,
        successful: false,
        errors: [],
      }

    case CREATE_ACCOUNT_SUCCESS:
      return {
        requesting: false,
        successful: true,
        errors: [],
      }

    case CREATE_ACCOUNT_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        requesting: false,
        successful: false,
      }

    default:
      return state
  }
}