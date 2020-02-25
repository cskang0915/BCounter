import React, { Component } from 'react';
import OverviewVisualContainer from '../entry/OverviewVisualContainer';
import OverviewBudgetEntryContainer from '../entry/OverviewBudgetEntryContainer';
import {Link} from 'react-router-dom';
import './OverviewTimeContainer.css'

class OverviewTimeContainer extends Component {
	state = {
		needs: [],
		wants: [],
		savings: [],
		// display: "initial",
		message: 'sending chart data'
	}

	componentDidMount() {
		this.sortData()
	}

	sortData = () => {
		let needs = []
		let wants = []
		let savings = []

		if(typeof this.props.data === "string") {
			this.setState({
				message: "no entries"
			})
		} else {
			this.props.data.map((budgetEntry) => {
				if(budgetEntry.category === "Needs"){
					needs.push(budgetEntry)
				} else if(budgetEntry.category === "Wants") {
					wants.push(budgetEntry)
				} else if(budgetEntry.category === "Savings") {
					savings.push(budgetEntry)
				}
			})

			needs.reverse()
			wants.reverse()
			savings.reverse()

			this.setState({
				needs: needs,
				wants: wants,
				savings: savings
			})
		}
	}

	render(){
		return(
			<div>
				<h1 className="this-props-time">{this.props.time}</h1>
				<OverviewVisualContainer state = {this.state}/>
				<Link to={`/overview/entry/${this.props.time}`}><button className="add-entry">Add Entry</button></Link>
				<OverviewBudgetEntryContainer data = {this.state.needs} message = {this.state.message} category = "Needs" time = {this.props.time}/>
				<OverviewBudgetEntryContainer data = {this.state.wants} message = {this.state.message} category = "Wants" time = {this.props.time}/>
				<OverviewBudgetEntryContainer data = {this.state.savings} message = {this.state.message} category = "Savings" time = {this.props.time}/>
			</div>
		)
	}
}

export default OverviewTimeContainer
