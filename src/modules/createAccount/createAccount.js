import React from 'react'
import { connect } from 'react-redux'
import createAccountRequest from './actions'

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createAccountRequest();
  }

  render() {
    const { requesting, successful, errors } = this.props
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
      <h5>Вы хотите создать новый счёт?</h5>
       <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-primary">Да</button>
        </form>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  requesting: state.createAccountReducer.requesting,
  successful: state.createAccountReducer.successful,
  errors: state.createAccountReducer.errors,
});

export default connect(mapStateToProps, { createAccountRequest })(CreateAccount);