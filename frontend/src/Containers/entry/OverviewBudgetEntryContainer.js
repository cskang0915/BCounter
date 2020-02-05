import React, { Component } from 'react';
import BudgetEntry from '../../Components/entry/BudgetEntry';

class OverviewBudgetEntryContainer extends Component {

	render() {
	  	let budgetEntry
	  	if(typeof this.props.data === "undefined"){
	  		budgetEntry = "there is no entries on this day"
	  	} else {
	  		budgetEntry = this.props.data.map((entry) => {
		  		return <BudgetEntry data={entry} rowid={entry.rowid}/>
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
