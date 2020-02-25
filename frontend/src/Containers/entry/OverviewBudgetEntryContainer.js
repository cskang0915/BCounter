import React, { Component } from 'react';
import BudgetEntry from '../../Components/entry/BudgetEntry';

class OverviewBudgetEntryContainer extends Component {
	render() {
		let budgetEntry
		let sum = 0
		if(typeof this.props.data === "undefined"){
			budgetEntry = <div>no entries</div>
		} else {
			budgetEntry = this.props.data.map((entry) => {
				sum = sum + parseFloat(entry.amount)
				return (
					<BudgetEntry style={this.props.toggle} data={entry} rowid={entry.rowid} time={this.props.time}/>
					)
			})
		}
		sum = sum.toFixed(2)

		return (
			<div>
				{/* OverviewBudgetEntryContainer */}
				<h2>
					<button onClick={this.props.toggleCategory}>
						{this.props.category}
					</button>
				</h2>
				{budgetEntry}
				<div>
						Total:&nbsp;${sum}
				</div>
			</div>
		)
	}
}

export default OverviewBudgetEntryContainer;