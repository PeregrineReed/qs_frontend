import React, { Component } from 'react';

class Meal extends Component {
  constructor() {
    super()
  };

  setCurrentFoods = () => {
    this.props.setCurrentFoods(this.props.foods)
  }
  
  render() {
    return(
      <button className='meal'
              onClick={this.setCurrentFoods}>
        {this.props.name}
      </button>
    )
  }
}

export default Meal;