import React, { Component } from 'react';
import BudgetEntry from '../../Components/entry/BudgetEntry';

class OverviewBudgetEntryContainer extends Component {

	render() {
			let budgetEntry
			let sum = 0
	  	if(typeof this.props.data === "undefined"){
	  		budgetEntry = "there is no entries on this day"
	  	} else {
	  		budgetEntry = this.props.data.map((entry) => {
					sum = parseFloat(parseFloat(sum + parseFloat(parseFloat(entry.amount).toFixed(2))).toFixed(2))
		  		return <BudgetEntry data={entry} rowid={entry.rowid}/>
		  	})
	  	}

	    return (
	      <div className="OverviewBudgetEntryContainer-category-total">
					<h2 className="OverviewBudgetEntryContainer-number">
						<b className="OverviewBudgetEntryContainer-title">
							{this.props.time} Total:&nbsp;$
						</b>
						{sum}
					</h2>
	      	{budgetEntry}
	      </div>
	    )
	}
}

export default OverviewBudgetEntryContainer
