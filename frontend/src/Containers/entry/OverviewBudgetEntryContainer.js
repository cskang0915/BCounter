import React, { Component } from 'react';
import BudgetEntry from '../../Components/entry/BudgetEntry';

class OverviewBudgetEntryContainer extends Component {
	state = {
		visibility: "visible"
	}

	componentDidMount() {
		this.isVisible()
	}

	isVisible = () => {
		if(this.props.data === "undefined"){
			this.setState({
				visibility: "hidden"
			})
		}
	}

	render() {
		let budgetEntry
		let sum = 0
	  	if(typeof this.props.data === "undefined"){
	  		budgetEntry = <div>no entries</div>
	  	} else {
	  		budgetEntry = this.props.data.map((entry) => {
					sum = sum + parseFloat(entry.amount)
		  		return (
						<BudgetEntry data={entry} rowid={entry.rowid} time={this.props.time}/>
						)
		  	})
	  	}
	  	sum = sum.toFixed(2)

	    return (
	      <div>
					{/* OverviewBudgetEntryContainer */}
					<h2 style={{visibility: this.state.visibility}}>
							{this.props.category}
					</h2>
	      	{budgetEntry}
					<div style={{visibility: this.state.visibility}}>
							Total:&nbsp;${sum}
					</div>
	      </div>
	    )
	}
}

export default OverviewBudgetEntryContainer;