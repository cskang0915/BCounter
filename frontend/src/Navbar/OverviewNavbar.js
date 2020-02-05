import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./OverviewNavbar.css"

class OverviewNavbar extends Component {
	closeNavbar = (event) => {
		console.log(event.target.style)
		event.target.style.width = '0'
	}
	render(){
		return(
			<div className="overview-sidenav">
				<a className="close-button" onClick={this.closeNavbar}>&lt;</a>
					<nav className="side-nav">
						<Link to = '/overview/daily' className="overview-navbar-link"> Daily </Link>
						<Link to = '/overview/weekly' className="overview-navbar-link"> Weekly </Link>
						<Link to = '/overview/monthly' className="overview-navbar-link"> Monthly </Link>
						<Link to = '/overview/entry' className="overview-navbar-link"> New Entry </Link>
						<Link to = '/overview/profile' className="overview-navbar-link"> Profile </Link>
						<Link to = '/' onClick={this.props.logout} className="overview-navbar-link overview-navbar-logout"> logout </Link>
					</nav>
			</div>
		)
	}
}

export default OverviewNavbar