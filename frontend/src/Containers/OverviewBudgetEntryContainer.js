import React, { Component } from 'react';
import BudgetEntry from '../Components/BudgetEntry';

class OverviewBudgetEntryContainer extends Component {
  render() {
  	let budgetEntry
  	if(typeof this.props.data === "undefined"){
  		console.log('herehere')
  		budgetEntry = "there is no entries on this day"
  	} else {
  		budgetEntry = this.props.data.map((entry) => {
	  		return <BudgetEntry data={entry}/>
	  	})
  	}

    return (
      <div>
      	{budgetEntry}
      </div>
    )
  }
}

export default OverviewBudgetEntryContainer
