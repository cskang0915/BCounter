import React, { Component } from 'react';

class OverviewBudgetEntryContainer extends Component {
  render() {
  	let budgetEntry = this.props.data.map((entry) => {
  		return (
  			<div>
  			<p>{entry.amount}</p>
  			<p>{entry.category}</p>
  			</div>
  			)
  	})
    return (
      <div>
      	{budgetEntry}
      </div>
    )
  }
}

export default OverviewBudgetEntryContainer
