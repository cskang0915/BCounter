import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/OverviewTimeContainer';
import EntryFormContainer from '../Containers/EntryFormContainer';

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
						{/*<Route path = "/overview/weekly" render = {() => {
							return <OverviewTimeContainer data = {this.props.dataWeek} />
						}}/>
						<Route path = "/overview/monthly" render = {() => {
							return <OverviewTimeContainer data = {this.props.dataMonth} />
						}}/>*/}
						<Route path ="/overview/entry" component={EntryFormContainer} />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

export default OverviewRoutes;