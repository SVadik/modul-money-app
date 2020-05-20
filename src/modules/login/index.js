import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import loginRequest from './actions'

// If you were testing, you'd want to export this component
// so that you can test your custom made component and not
// test whether or not Redux and Redux Form are doing their jobs
class Login extends Component {

  // Remember, Redux Form passes the form values to our handler
  // In this case it will be an object with `email` and `password`
  submit = (values) => {
    this.props.loginRequest(values)
  }

  render () {
    const {
      handleSubmit, // remember, Redux Form injects this into our props
      login: {
        requesting,
        successful,
        messages,
        errors,
      },
    } = this.props

    return (
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>LOGIN</h1>
          <label htmlFor="username">Email</label>
          {/*
            Our Redux Form Field components that bind email and password
            to our Redux state's form -> login piece of state.
          */}
          <input
            name="username"
            type="text"
            id="username"
            className="username"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="password"
            component="input"
          />
          <button action="submit">LOGIN</button>
        </form>
      </div>
    )
  }
}

// Grab only the piece of state we need
const mapStateToProps = state => ({
  login: state.login,
})

export default connect(mapStateToProps, { loginRequest })(Login);