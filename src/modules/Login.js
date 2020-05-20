import React from "react";
import { Redirect } from "react-router"


class Login extends React.Component {
  render() {
    if (this.props.authorized) {
      return <Redirect to="/private"/>
    }

    return (
      <div>
        <h1>Авторизация</h1>
        <button type="button" onClick={this.props.login}>Войти</button>
      </div>
    );
  }
};

export { Login };