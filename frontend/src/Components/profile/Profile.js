import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

class Profile extends Component {
	render(){
		return(
			<div>
				<div className="profile-info">
					<div className="above-input">First Name</div>
					<p className="first-name">{this.props.state.first_name}</p>
					<div className="above-input">Last Name</div>
					<p className="last-name">{this.props.state.last_name}</p>
					{/* <p className="register-username">{this.props.state.username}</p> */}
					<div className="above-input">Email</div>
					<p className="email">{this.props.state.email}</p>
				</div>
					<Link to={`/overview/profile/edit/${this.props.state.rowid}`} ><button className="edit">Edit</button></Link>
					<Link to="/overview/weekly"><button className="back">Back</button></Link>
			</div>
		)
	}
}

export default Profile