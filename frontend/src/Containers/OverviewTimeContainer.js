import React, { Component } from 'react';
import OverviewVisualComponent from '../Components/OverviewVisualComponent';
import OverviewBudgetEntryContainer from './OverviewBudgetEntryContainer';

class OverviewTimeContainer extends Component {
	state = {
		needs: [],
		wants: [],
		savings: []
	}

	componentDidMount() {
		console.log('here')
		console.log(this.state)
		console.log(this.props.data)
		this.sortData()
		console.log('here')
		console.log(this.state)
		console.log(this.props.data)

	}

	sortData = () => {
		let needs = []
		let wants = []
		let savings = []

		this.props.data.map((budgetEntry) => {
			if(budgetEntry.category === "Needs"){
				needs.push(budgetEntry)
				// this.setState({
				// 	needs: [...this.state.needs, budgetEntry]
				// })
			} else if(budgetEntry.category === "Wants") {
				wants.push(budgetEntry)
				// this.setState({
				// 	wants: [...this.state.wants, budgetEntry]
				// })
			} else if(budgetEntry.category === "Savings") {
				savings.push(budgetEntry)
				// this.setState({
				// 	savings: [...this.state.savings, budgetEntry]
				// })
			}

		})

		this.setState({
			needs: needs,
			wants: wants,
			savings: savings
		})
	}

	render(){
		return(
			<div>
				<OverviewVisualComponent />
				<OverviewBudgetEntryContainer data = {this.state.needs}/>
				<OverviewBudgetEntryContainer data = {this.state.wants}/>
				<OverviewBudgetEntryContainer data = {this.state.savings}/>

			</div>
		)
	}
}

export default OverviewTimeContainer