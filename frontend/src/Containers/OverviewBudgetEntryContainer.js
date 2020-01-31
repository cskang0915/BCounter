import React, { Component } from 'react';
import BudgetEntry from '../Components/BudgetEntry';

class OverviewBudgetEntryContainer extends Component {
  render() {
  	let budgetEntry = this.props.data.map((entry) => {
  		return <BudgetEntry data={entry}/>
  	})
    return (
      <div>
      	{budgetEntry}
      </div>
    )
  }
}

export default OverviewBudgetEntryContainer
