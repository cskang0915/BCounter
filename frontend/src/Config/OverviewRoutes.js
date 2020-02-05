import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {Switch, Route} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/overview/OverviewTimeContainer';
import EntryFormContainer from '../Containers/form/EntryFormContainer';
import EditFormContainer from '../Containers/form/EditFormContainer';
import ProfileContainer from '../Containers/profile/ProfileContainer';
import EditProfileContainer from '../Containers/profile/EditProfileContainer';

class OverviewRoutes extends Component {
	render() {
		return(
			<div>
				<OverviewNavbar logout={this.props.logout}/>
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
					<Route exact path ="/overview/profile" render={() => {
						return <ProfileContainer history={this.props.history} />
					}}/>
					<Route exact path ="/overview/profile/edit/:rowid" render={(props) => {
						return <EditProfileContainer history={this.props.history} rowid={props.match.params.rowid} />
					}}/>
				</Switch>
			</div>
		)
	}
}

export default OverviewRoutes;