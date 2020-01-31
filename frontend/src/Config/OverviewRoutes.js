import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/OverviewTimeContainer';

class OverviewRoutes extends Component {
	state = {
		day: 'day',
		week: 'week',
		month: 'month'
	}

	render(){
		return(
			<div>
				<BrowserRouter>
					<OverviewNavbar/>
					<Switch>
						<Route exact path = "/overview/daily" render = {() => {
							return <OverviewTimeContainer data = {this.state.day} />
						}}/>
						<Route exact path = "/overview/weekly" render = {() => {
							return <OverviewTimeContainer data = {this.state.week} />
						}}/>
						<Route exact path = "/overview/monthly" render = {() => {
							return <OverviewTimeContainer data = {this.state.month} />
						}}/>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

export default OverviewRoutes;