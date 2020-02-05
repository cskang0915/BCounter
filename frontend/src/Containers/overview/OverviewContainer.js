import React, { Component } from 'react';
import OverviewRoutes from '../Config/OverviewRoutes';
import moment from 'moment';

class OverviewContainer extends Component {
	state = {
		dataDay: [],
		dataWeek: [],
		dataMonth: []
	}

	componentDidMount() {
		this.getByDay();
		this.getByWeek();
		this.getByMonth();
	}

	getByDay = () => {
		let day = moment().format('D')
		let month = moment().format('M')
		let year = moment().format('Y')
		fetch(`http://localhost:4000/api/budgetEntry/get/day/${month}/${day}/${year}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				this.setState({
					dataDay: data
				})
			})
			.catch(error => console.log(error))
		}
	// create function for get by week
	getByWeek = () => {
		let year = moment().format('Y')
		let week = moment().format('W')
		fetch(`http://localhost:4000/api/budgetEntry/get/week/${week}/${year}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				this.setState({
					dataWeek: data
				})
			})
			.catch(error => console.log(error))
		}
		
	// create function for get by month
	getByMonth = () => {
		let month = moment().format('M')
		let year = moment().format('Y')
		fetch(`http://localhost:4000/api/budgetEntry/get/month/${month}/${year}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				this.setState({
					dataMonth: data
				})
			})
			.catch(error => console.log(error))
		}

	render(){
		return(
			<div>
				<OverviewRoutes history={this.props.history} logout={this.props.logout} dataDay = {this.state.dataDay} dataWeek = {this.state.dataWeek} dataMonth = {this.state.dataMonth}/>
			</div>
		)
	}
}

export default OverviewContainer;