import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import loginRequest from './actions.js'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.props.loginRequest({username, password});
    }
  }
  render() {
    const { username, password } = this.state;
    if (this.props.loggedIn) {
      return (<Redirect to='/'/>)
    }
    if(this.props.errors.length){
      return <div>
        Возникли ошибки: {
          this.props.errors.map(item => 
            item.body + ' on ' +item.time.toTimeString().split(' ')[0])
        }
      </div>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>LOGIN</h1>
          <label htmlFor="username">Email</label>
          <input type="email" name="username" id="username" value={username} onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={this.handleChange}/>
          <button type="submit">LogIn</button>
        </form>
        Don't have account? <Route to='register'>Register here</Route>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, requesting, successful, errors } = state.loginReducer
  return {
  loggedIn: loggedIn,
  requesting: requesting,
  successful: successful,
  errors: errors
}
}

export default connect(mapStateToProps, { loginRequest })(Login);