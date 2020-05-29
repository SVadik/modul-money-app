import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './modules/home/home'
import Login from './modules/login/login'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const user = JSON.parse(localStorage.getItem('token'));
  //   this.state = user ? { loggedIn: true, user } : {};
  // }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <PrivateRoute exact path="/">
                <Home/>
              </PrivateRoute>

              <Route exact path="/login">
                <Login/>
              </Route>
              
              {/* <Route exact path="/signup">
                <SignUp/>
              </Route> */}

              {
                this.props.loggedIn ?
                <Redirect to="/" /> :
                <Redirect to="/login" />
              }
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(mapStateToProps, null)(App);
