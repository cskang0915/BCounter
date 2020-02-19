import React, { Component } from 'react';
import OverviewNavbar from '../Navbar/OverviewNavbar';
import {Switch, Route} from 'react-router-dom';
import OverviewTimeContainer from '../Containers/overview/OverviewTimeContainer';
import EntryFormContainer from '../Containers/form/EntryFormContainer';
import EditFormContainer from '../Containers/form/EditFormContainer';
import ProfileContainer from '../Containers/profile/ProfileContainer';
import EditProfileContainer from '../Containers/profile/EditProfileContainer';
import EditPasswordContainer from '../Containers/profile/EditPasswordContainer';
import DeleteConfirmation from '../Components/profile/DeleteConfirmation';
import './OverviewRoutes.css';

class OverviewRoutes extends Component {
	state = {
		width: "0",
		hamburgerMenuVisibility: "visible",
		backButtonVisibility: "hidden"
	}

	closeNavbar = (event) => {
		this.setState({
			width: "0",
			hamburgerMenuVisibility: "visible",
			backButtonVisibility: "hidden"
		})
	}

	openNavbar = (event) => {
		this.setState({
			width:"50%",
			hamburgerMenuVisibility: "hidden",
			backButtonVisibility: "visible"
		})
	}

	render() {
		return(
			<div className="overview-routes-wrapper">
				<a className="hamburger-menu" style={{visibility: this.state.hamburgerMenuVisibility}} onClick={this.openNavbar}>☰</a>
				<OverviewNavbar logout={this.props.logout} closeNavbar={this.closeNavbar} width={this.state.width} visibility={this.state.backButtonVisibility} displayToggle={false} display="none"/>
				<Switch>
					<Route exact path = "/overview" render = {() => {
						return this.props.dataWeek.length 
								? <OverviewTimeContainer data = {this.props.dataWeek} time = "Weekly"/>
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
					<Route exact path="/overview/password/edit" render={(props) => {
						return <EditPasswordContainer history={this.props.history} />
					}} />
					<Route exact path="/overview/profile/delete" render={(props) => {
						return <DeleteConfirmation history={this.props.history} />
					}} />
				</Switch>
			</div>
		)
	}
}

export default OverviewRoutes;