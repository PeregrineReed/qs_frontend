import React, { Component } from 'react';

class Logout extends Component {
  constructor() {
    super()
  };

  logOut = async () => {
    this.props.logOut()
  }

  render() {
    return(
      <button className='logout'
              onClick={this.logOut}>
        Log Out
      </button>
    )
  }
}

export default Logout;
