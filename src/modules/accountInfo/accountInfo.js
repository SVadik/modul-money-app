import React from 'react'
import Modal from '../modal/modal';
import FillAccount from '../accounts/operations/fillAccount';

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      displayedAccount: this.props.displayedAccount,
      selectedModal: null
    };
  }
  
  toggleModal = () => {
    this.setState({ ...this.state,
      isOpen: !this.state.isOpen
    });
  }
  
  handleFill = number => (event) => {
    this.setState({ ...this.state,
      selectedModal: (<FillAccount number={number}/>),
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="col-lg"> 
        <div className="card">
          <div className="card-body">
            <div className="card-title">№ счета {this.state.displayedAccount.number}</div>
            <div> Баланс {this.state.displayedAccount.balance}</div>
            <div className="row col-sm-6">
              <button type="button" onClick={this.handleFill(this.state.displayedAccount.number)} className="btn btn-primary mr-2">Пополнить</button>
              <button type="button" onClick={this.handleSend} className="btn btn-primary m-auto">Перевод</button>
              <button type="button" onClick={this.fetchAccountNumber} className="btn btn-primary mr-auto">Платёж</button>
            </div>
            <br/>
            <div className="row col-sm-6">
              <button type="button" className="btn btn-primary mr-2">Пополнить</button>
              <button type="button" className="btn btn-primary m-auto">Перевод</button>
              <button type="button" className="btn btn-primary mr-auto">Платёж</button>
              {/* <button type="button" class="btn btn-primary">Primary</button> */}
            </div>
          </div>
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          modalTitle={'Пополнение счета'}>
          {this.state.selectedModal}
        </Modal>
      </div>
    )
  }
}

export default (AccountInfo)