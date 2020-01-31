import React, { Component } from 'react';
import moment from 'moment';

class OverviewContainer extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    // gives us start and end of a certain week as key '_d'
    console.log(moment().startOf('week').week(1))
    console.log(moment().endOf('week').week(1))
  }

  render() {
    return (
      <div>
        Overview Container
        <button
          onClick={this.handleSubmit}></button>
      </div>
    )
  }
}

export default OverviewContainer
