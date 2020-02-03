import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/OverviewTimeContainer';
import EntryFormContainer from '../Containers/EntryFormContainer';

class OverviewRoutes extends Component {
	render() {
		return(
			<div>
				<OverviewNavbar/>
				<Switch>
					<Route exact path = "/overview" render = {() => {
						return this.props.dataDay.length 
								? <OverviewTimeContainer data = {this.props.dataDay} />
								: "Loading..."
					}}/>
					<Route exact path = "/overview/daily" render = {() => {
						return this.props.dataDay.length 
								? <OverviewTimeContainer data = {this.props.dataDay} />
								: "Loading..."
					}}/>
					<Route path = "/overview/weekly" render = {() => {
						return this.props.dataWeek.length 
								? <OverviewTimeContainer data = {this.props.dataWeek} />
								: "Loading..."
					}}/>
					<Route path = "/overview/monthly" render = {() => {
						return this.props.dataMonth.length 
								? <OverviewTimeContainer data = {this.props.dataMonth} />
								: "Loading..."
					}}/>
					<Route path ="/overview/entry" component={EntryFormContainer} />
				</Switch>
			</div>
		)
	}
}

export default OverviewRoutes;