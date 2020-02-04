import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/OverviewTimeContainer';
import EntryFormContainer from '../Containers/EntryFormContainer';
import EditFormContainer from '../Containers/EditFormContainer';
import ProfileContainer from '../Containers/ProfileContainer';
import EditProfileContainer from '../Containers/EditProfileContainer';

class OverviewRoutes extends Component {
	render() {
		return(
			<div>
				<OverviewNavbar/>
				<Switch>
					<Route exact path = "/overview" render = {() => {
						return this.props.dataDay.length 
								? <OverviewTimeContainer data = {this.props.dataDay} time = "Daily"/>
								: "Loading..."
					}}/>
					<Route exact path = "/overview/daily" render = {() => {
						return this.props.dataDay.length 
								? <OverviewTimeContainer data = {this.props.dataDay} time = "Daily"/>
								: "Loading..."
					}}/>
					<Route exact path = "/overview/weekly" render = {() => {
						return this.props.dataWeek.length 
								? <OverviewTimeContainer data = {this.props.dataWeek} time = "Weekly"/>
								: "Loading..."
					}}/>
					<Route exact path = "/overview/monthly" render = {() => {
						return this.props.dataMonth.length 
								? <OverviewTimeContainer data = {this.props.dataMonth} time = "Monthly"/>
								: "Loading..."
					}}/>
					<Route exact path ="/overview/entry" component={EntryFormContainer} />
					<Route exact path = "/overview/update/:rowid" render={(props) => {
						return <EditFormContainer rowid={props.match.params.rowid} />
					}} />
					<Route exact path ="/overview/profile" component={ProfileContainer} />
					<Route exact path ="/overview/profile/edit/:rowid" render={(props) => {
						return <EditProfileContainer history={this.props.history} rowid={props.match.params.rowid} />
					}}/>
				</Switch>
			</div>
		)
	}
}

export default OverviewRoutes;