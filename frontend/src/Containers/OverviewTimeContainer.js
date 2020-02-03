import React, { Component } from 'react';
import OverviewVisualComponent from '../Components/OverviewVisualComponent';
import OverviewBudgetEntryContainer from './OverviewBudgetEntryContainer';

class OverviewTimeContainer extends Component {
	state = {
		needs: [],
		wants: [],
		savings: [],
		message: ''
	}

	componentDidMount() {
		this.sortData()
	}

	sortData = () => {
		let needs = []
		let wants = []
		let savings = []
		console.log('we are here')
		console.log(this.props.data)

		if(typeof this.props.data === "string") {
			this.setState({
				message: "no entries"
			})
		} else {
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
		console.log("!!!!!!!!!!!!")
	}

	render(){
		return(
			<div>
				<OverviewVisualComponent />
				<OverviewBudgetEntryContainer data = {this.state.needs} message = {this.state.message}/>
				<OverviewBudgetEntryContainer data = {this.state.wants} message = {this.state.message}/>
				<OverviewBudgetEntryContainer data = {this.state.savings} message = {this.state.message}/>
			</div>
		)
	}
}

export default OverviewTimeContainer