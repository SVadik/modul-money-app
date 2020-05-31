import React from 'react'
import { connect } from 'react-redux';
import fillAccountRequest from '../actions'

class FillAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: this.props.number,
        amount: 0
    };

  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.fillAccountRequest();
  }

  render() {
    const { amount } = this.state;
    const { requesting, successful, errors, number } = this.props
    if(requesting) {
      return (
        <div>
          Loading...
        </div>
      )

    }
    if (successful) {
      this.props.onClose()
      return null
    }

    if(errors.length){
      return <div>
        Возникли ошибки: {
          errors.map(item => 
            item.body + ' on ' +item.time.toTimeString().split(' ')[0])
        }
      </div>
    }
    
    return (
     <div>
      <h5>Пополнить счёт №{number} на указанную сумму:</h5>
       <form onSubmit={this.handleSubmit}>
          <label htmlFor="amount">Сумма</label>
          <input type="number" step="0.01" min="0.01" name="amount" id="amount" value={amount}/>
          <button type="submit" className="btn btn-primary">Да</button>
        </form>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.accountsReducer.loading,
  errorMessage: state.accountsReducer.errorMessage,
});
export default connect(mapStateToProps, { fillAccountRequest })(FillAccount);