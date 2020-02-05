import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
	render(){
		return(
			<div>
				<p><b>First name:</b> {this.props.state.first_name}</p>
				<p><b>Last name:</b> {this.props.state.last_name}</p>
				<p><b>Username:</b> {this.props.state.username}</p>
				<p><b>Email:</b> {this.props.state.email}</p>
				<Link to={`/overview/profile/edit/${this.props.state.rowid}`} ><button>edit profile</button></Link>
				<Link to="/overview/weekly"><button>Go back</button></Link>
			</div>
		)
	}
}

export default Profile