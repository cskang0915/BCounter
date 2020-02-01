import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/OverviewTimeContainer';

class OverviewRoutes extends Component {
	render() {
		return(
			<div>
				<BrowserRouter>
					<OverviewNavbar/>
					<Switch>
						<Route exact path = "/overview" render = {() => {
							return <OverviewTimeContainer data = {this.props.dataDay} />
						}}/>
						<Route exact path = "/overview/daily" render = {() => {
							return <OverviewTimeContainer data = {this.props.dataDay} />
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