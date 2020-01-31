import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/OverviewTimeContainer';
import moment from 'moment';

class OverviewRoutes extends Component {
	state = {
		dataDay: [],
		dataWeek: [],
		dataMonth: []
	}

	componentWillMount() {
		this.getByDay();
		this.getByWeek();
		this.getByMonth();
		// console.log("here")
		// console.log(this.state.dataDay)
		// below is going to be displayed for the user
		// console.log(moment().startOf("week").week(week))
		// console.log(moment().endOf("week").week(week))
	}

	// create function for get by day
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
				console.log(data)
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
				console.log(data)
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
				console.log(data)
				this.setState({
					dataMonth: data
				})
			})
			.catch(error => console.log(error))
		}

	render() {
		return(
			<div>
				<BrowserRouter>
					<OverviewNavbar/>
					<Switch>
						<Route exact path = "/overview" render = {() => {
							return <OverviewTimeContainer data = {this.state.dataDay} />
						}}/>
						<Route exact path = "/overview/daily" render = {() => {
							return <OverviewTimeContainer data = {this.state.dataDay} />
						}}/>
						{/* <Route exact path = "/overview/weekly" render = {() => {
							return <OverviewTimeContainer data = {this.state.dataWeek} />
						}}/>
						<Route exact path = "/overview/monthly" render = {() => {
							return <OverviewTimeContainer data = {this.state.dataMonth} />
						}}/> */}
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

export default OverviewRoutes;