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
					sum = sum + parseFloat(entry.amount)
		  		return <BudgetEntry data={entry} rowid={entry.rowid} time={this.props.time}/>
		  	})
	  	}
	  	sum = sum.toFixed(2)

	    return (
	      <div className="OverviewBudgetEntryContainer-category-total">
					<h2 className="OverviewBudgetEntryContainer-number">
						<b className="OverviewBudgetEntryContainer-title">
							{this.props.category} Total:&nbsp;${sum}
						</b>
					</h2>
	      	{budgetEntry}
	      </div>
	    )
	}
}

export default OverviewBudgetEntryContainer;