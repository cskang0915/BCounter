import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
	render(){
		return(
			<div>
				<p>{this.props.state.first_name}</p>
				<p>{this.props.state.last_name}</p>
				<p>{this.props.state.username}</p>
				<p>{this.props.state.email}</p>
				<Link to={`/overview/profile/edit/${this.props.state.rowid}`} >edit profile</Link>
			</div>
		)
	}
}

export default Profile