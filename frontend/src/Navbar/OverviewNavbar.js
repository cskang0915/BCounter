import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./OverviewNavbar.css";
import BackButton from '../Pics/BackArrow/BackArrow.svg';

class OverviewNavbar extends Component {
	state = {
		displayToggle: false,
		display: "none"
	}

	resetSubMenu = () => {
		this.props.closeNavbar()
		this.setState({
			displayToggle:false,
			display: "none"
		})
	}

	openSubmenu = () => {
		if(this.state.displayToggle === false){
			this.state.displayToggle = true
			this.setState({
				display: "block"
			})
		}else {
			this.state.displayToggle = false
			this.setState({
				display: "none"
			})
		}
	}
	render(){
		return(
			<div className="overview-sidenav" style={{width: this.props.width}}>
				<a className="close-button" style={{visibility: this.props.visibility}} onClick={this.resetSubMenu}>
					<img src={BackButton} className="back-button" style={{height:35}} alt="BackButton SVG"/>
				</a>
					<nav className="side-nav">
						<div><a onClick={this.openSubmenu} className="overview-navbar-link">Time</a>
							<div className="sub-menu" style={{display: this.state.display}}>
								<Link to = '/overview/daily' className="overview-navbar-link"> Daily </Link>
								<Link to = '/overview/weekly' className="overview-navbar-link"> Weekly </Link>
								<Link to = '/overview/monthly' className="overview-navbar-link"> Monthly </Link>
							</div>
						</div>
						<Link to = '/overview/profile' className="overview-navbar-link"> Profile </Link>
						<Link to = '/' onClick={this.props.logout} className="overview-navbar-link overview-navbar-logout"> Sign Out </Link>
					</nav>
			</div>
		)
	}
}

export default OverviewNavbar