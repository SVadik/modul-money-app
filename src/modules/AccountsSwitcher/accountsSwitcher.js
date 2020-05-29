import React from 'react'
import Modal from '../modal/modal';
import CreateAccount from '../createAccount/createAccount';

class AccountsSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      accounts: this.props.accounts,
      isOpen: false,
      displayedAccount: this.props.displayedAccount
    };
  }

  fetchAccountNumber = number => (event) => {
    this.props.setDisplayedAccount({
      number
    })
  }

  toggleModal = () => {
    this.setState({ ...this.state,
      isOpen: !this.state.isOpen
    });
  }

  render() {
    if (!this.state.accounts.length) {
      return (
        <div className ="col-sm text-center">
          Счетов пока нет
          <button className="btn btn-primary" onClick={this.toggleModal}>Создать счёт</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <CreateAccount />
          </Modal>
        </div>
      )
    }

    return (
      <div>
        <h3>Счета</h3>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Номер</th>
              <th scope="col">Баланс</th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map(account => (
              <tr key={account.number} onClick={this.fetchAccountNumber(account.number)}>
                <th scope="row">{account.number}</th>
                <td>{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={this.toggleModal}>Создать счёт</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <CreateAccount />
          </Modal>
      </div>
    )
  }
}

export default AccountsSwitcher