import React from 'react'
import AccountInfo from '../accountInfo/accountInfo'
import { connect } from 'react-redux';
import { getAccountsRequest, setDisplayedAccount } from './actions'
import AccountsSwitcher from '../AccountsSwitcher/accountsSwitcher';

class Accounts extends React.Component {
  componentDidMount = () => {
    this.props.getAccountsRequest();
  }
  addAccountHandler = (event) => {
    alert("hello")
  }

  render () {
    const { displayedAccount, errorMessage, accounts, loading, setDisplayedAccount } = this.props
    if (loading) {
      return <div>Loading...</div>
    }
    if(errorMessage) {
      return <div>{errorMessage}</div>
    }
    // if (!accounts.length) {
    //   return <div className="row">
    //     <div className="col-lg"> </div>
    //     <div className ="col-sm text-center">
    //       Счетов пока нет
    //       <button className="btn btn-primary" onClick={this.addAccountHandler}>Создать счёт</button>
    //     </div>
    //   </div>
    // }
    return (
      <div className="row">
        <AccountInfo displayedAccount={displayedAccount} />
        <AccountsSwitcher 
          accounts={accounts} 
          setDisplayedAccount={setDisplayedAccount} 
        />
      </div>
    )
  
  }
}

const mapStateToProps = state => ({
  loading: state.accountsReducer.loading,
  errorMessage: state.accountsReducer.errorMessage,
  accounts: state.accountsReducer.accountsList,
  displayedAccount: state.accountsReducer.displayedAccount,
});

const mapDispatchToProps = {
  getAccountsRequest,
  setDisplayedAccount
}
export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
/* <div className="col-lg">
  <p>Account Info</p>
</div> */