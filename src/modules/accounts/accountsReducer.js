import { GET_ACCOUNTS_REQUEST, GET_ACCOUNTS_SUCCESS, GET_ACCOUNTS_ERROR, SET_DISPLAYED_ACCOUNT } from "./constants"

const initialState = {
  accountsList: [],
  errorMessage: null,
  loading: false,
  displayedAccount: {},
}

export const accountsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ACCOUNTS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        accountsList: action.payload,
        displayedAccount: action.payload[0],
      }

    case GET_ACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }

      case SET_DISPLAYED_ACCOUNT:
        return {
          ...state,
          displayedAccount: state.accountsList.find(i => i.number === action.payload.number)
        }

    default:
      return state
  }
}