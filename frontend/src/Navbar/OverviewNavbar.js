import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OverviewNavbar extends Component {
	render(){
		return(
			<div>
				<p>navbar</p>
				<nav>
					<Link to = '/overview/daily'> daily </Link>
					<Link to = '/overview/weekly'> weekly </Link>
					<Link to = '/overview/monthly'> monthly </Link>
					<Link to = '/overview/entry'> new entry </Link>
					<Link to = '/overview/profile'> profile </Link>
					<Link to = '/' onClick={this.props.logout}> logout </Link>
				</nav>
			</div>
		)
	}
}

export default OverviewNavbar