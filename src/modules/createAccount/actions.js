
import {
  CREATE_ACCOUNT_REQUESTING,
} from './constants'

const createAccountRequest = function createAccountRequest () {
  return {
    type: CREATE_ACCOUNT_REQUESTING
  }
}

export default createAccountRequest