import { GET_ACCOUNTS_REQUEST, GET_ACCOUNTS_SUCCESS, ACCOUNTS_ERROR, SET_DISPLAYED_ACCOUNT, MONEY_TRANSFER_REQUEST, MONEY_TRANSFER_SUCCESS } from "./constants"

const initialState = {
  accountsList: [],
  errorMessage: null,
  loading: false,
  displayedAccount: {},
  moneyTransaction: {}
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

    case ACCOUNTS_ERROR:
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
      
      case MONEY_TRANSFER_REQUEST:
        return {
          ...state,
          loading: true,
          moneyTransaction: action.payload
        }
  
      case MONEY_TRANSFER_SUCCESS:
        return {
          ...state,
          loading: false,
        }
  
      // case MONEY_TRANSFER_ERROR:
      //   return {
      //     ...state,
      //     loading: false,
      //     errorMessage: action.payload
      //   }

    default:
      return state
  }
}