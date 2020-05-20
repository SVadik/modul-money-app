import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { PrivateRoute } from "./modules/PrivateRoute"
import { Home } from './modules/Home';
import { Login } from './modules/Login';
import { SignUp } from './modules/SignUp';


export class App extends React.Component {
  state = {
    authorized: false
  }

  login = () => {
    this.setState({
      authorized: true,
    })
  }

  logout = () => {
    this.setState({
      authorized: false,
    })
  }

  render() {
    const { authorized } = this.state
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <PrivateRoute exact path="/private" authorized={authorized}>
              <Home logout={this.logout}/>
            </PrivateRoute>

            <Route exact path="/login">
              <Login login={this.login} authorized={authorized}/>
            </Route>
            
            <Route exact path="/signup">
              <SignUp login={this.login} authorized={authorized}/>
            </Route>

            {
              this.state.authorized ?
              <Redirect to="/private" /> :
              <Redirect to="/login" />

            }
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
