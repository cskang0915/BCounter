import React, { Component } from 'react';
import Profile from '../Components/profile/Profile';

class ProfileContainer extends Component {
	state = {
		rowid: null,
		first_name: '',
		last_name: '',
		username: '',
		email: ''

	}

	componentDidMount(){
		this.getUserId()
	}

	getUserId = () => {
		fetch('http://localhost:4000/api/user/info', {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log('here')
			console.log(data)
			this.setState({
				rowid: data.rowId,
				first_name: data.user[0].first_name,
				last_name: data.user[0].last_name,
				username: data.user[0].username,
				email: data.user[0].email
			})
		})
	}

	render() {
		return(
			<div>
				<Profile state={this.state} />
			</div>
		)
	}
}

export default ProfileContainer