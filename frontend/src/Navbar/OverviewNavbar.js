import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OverviewNavbar extends Component {
	render(){
		return(
			<div>
				<p>navbar</p>
				<nav>
					<Link to = '/overview/daily'>day</Link>
					<Link to = '/overview/weekly'>week</Link>
					<Link to = '/overview/monthly'>month</Link>
				</nav>
			</div>
		)
	}
}

export default OverviewNavbar