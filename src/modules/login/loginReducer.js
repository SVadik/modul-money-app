import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants'
import { checkAuthorization } from '../../services/check-auth'

const loggedIn = checkAuthorization();
const initialState = {
  loggedIn: loggedIn,
  requesting: false,
  successful: false,
  errors: []
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUESTING:
      return {
        loggedIn: false,
        requesting: true,
        successful: false,
        errors: [],
      }

    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        requesting: false,
        successful: true,
        errors: [],
      }

    case LOGIN_ERROR:
      return {
        loggedIn: false,
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