
import {
  LOGIN_REQUESTING,
} from './constants'

const loginRequest = function loginRequest ({ username, password }) {
  return {
    type: LOGIN_REQUESTING,
    payload: { username, password }
  }
}

export default loginRequest