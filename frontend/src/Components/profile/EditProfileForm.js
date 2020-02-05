import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditProfileForm extends Component {
	render(){
		return(
			<div className="eventForm">
				<h1>profile edit form</h1>
				<form className="form" onSubmit={this.props.handleSubmit}>
					<label>First Name
					<input
						type="text"
						name="first_name"
						value={this.props.state.first_name}
						placeholder="First Name"
						onChange={this.props.handleChange}
					/>
					</label>
					<br />
					<label>Last Name
					<input
						type="text"
						name="last_name"
						value={this.props.state.last_name}
						placeholder="Last Name"
						onChange={this.props.handleChange}
					/>
					</label>
					<br />
					<label>Username
					<input
						type="text"
						name="username"
						value={this.props.state.username}
						placeholder="Username"
						onChange={this.props.handleChange}
					/>
					</label>
					<br />
					<label>Email
					<input
						type="email"
						name="email"
						value={this.props.state.email}
						placeholder="Email"
						onChange={this.props.handleChange}
					/>
					</label>
					<br />
					<label>Password
					<input
						type="password"
						name="password"
						value={this.props.state.password}
						placeholder="Password"
						onChange={this.props.handleChange}
					/>
					</label>
					<br />
					<label>Re-enter Password
					<input
						type="password"
						name="password2"
						value={this.props.state.password2}
						placeholder="Re-enter Password"
						onChange={this.props.handleChange}
					/>
					</label>
					<br />
						<button type="submit">
							Submit
						</button>
				</form>
					<Link to="/overview/weekly">
						<button>
							Go back
						</button>
					</Link>
			</div>
		)
	}
}

export default EditProfileForm