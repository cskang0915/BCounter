import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OverviewNavbar extends Component {
	render(){
		return(
			/*<header>
				<a href="#main-menu" className="menu-toggle">
					<span className="fa fa-bars"></span>
				</a>

				<h1 className="logo">hamburgers</h1>

				<nav id="main-menu" className="main-menu">
					<a href="#main-menu-toggle" className="menu-close">
						<span className="fa fa-close"></span>
					</a>
					<ul>
						<li><a href="#">link 1</a></li>
						<li><a href="#">link 2</a></li>
						<li><a href="#">link 3</a></li>
					</ul>
				</nav>
				<a href="main-menu-toggle" className="backdrop" hidden></a>
			</header>*/

			<div>
				<p>navbar</p>
				<nav>
					<Link to = '/overview/daily'>day</Link>
					<Link to = '/overview/weekly'>week</Link>
					<Link to = '/overview/monthly'>month</Link>
					<Link to = '/overview/entry'>new entry</Link>
					<Link to = '/overview/profile'>profile</Link>
				</nav>
			</div>
		)
	}
}

export default OverviewNavbar