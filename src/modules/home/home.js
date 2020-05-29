import React from 'react'
import Accounts from '../accounts/accounts';

class Home extends React.Component {
  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <h1> Hello </h1>
        </div>
          <Accounts />
      </div>
    )
  }
}
export default Home;