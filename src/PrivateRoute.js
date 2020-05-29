import React from "react";
import { Route, Redirect } from "react-router"
import { connect } from 'react-redux'

class PrivateRoute extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <Route {...this.state} >
        {
          this.props.loggedIn ? children : <Redirect to="/login"/>
        }
      </Route>
    )
  }
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(mapStateToProps, null)(PrivateRoute);