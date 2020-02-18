import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditProfileForm.css'

class EditProfileForm extends Component {
	render(){
		return(
			<div className="eventForm">
				<p className="app-name">B Counter</p>
				<h1 className="edit-form-title">Edit Profile</h1>
				<form className="form" onSubmit={this.props.handleSubmit}>
					{/* <label>First Name */}
					<input className="first"
						type="text"
						name="first_name"
						value={this.props.state.first_name}
						placeholder="First Name"
						onChange={this.props.handleChange}
					/>
					{/* </label> */}
					<br />
					{/* <label>Last Name */}
					<input className="last"
						type="text"
						name="last_name"
						value={this.props.state.last_name}
						placeholder="Last Name"
						onChange={this.props.handleChange}
					/>
					{/* </label> */}
					<br />
					{/* <label>Username */}
					<input className="userName"
						type="text"
						name="username"
						value={this.props.state.username}
						placeholder="Username"
						onChange={this.props.handleChange}
					/>
					{/* </label> */}
					<br />
					{/* <label>Email */}
					<input className="Email"
						type="email"
						name="email"
						value={this.props.state.email}
						placeholder="Email"
						onChange={this.props.handleChange}
					/>
					
					<br />
						<button type="save" className="save">
							save
						</button>
						<Link to="/overview/weekly">
							<button className="go-back">
								Go back
							</button>
						</Link>
				</form>
			</div>
		)
	}
}

export default EditProfileForm