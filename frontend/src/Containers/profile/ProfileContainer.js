import React, { Component } from 'react';
import Profile from '../../Components/profile/Profile';
import './ProfileContainer.css';


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
		fetch(`${process.env.REACT_APP_API}/api/user/info`, {
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

	deleteUserInfo = () => {
		fetch(`${process.env.REACT_APP_API}/api/user/delete`, {
			method: "DELETE",
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
		.then(() => localStorage.removeItem('uid'))
		.then(() => this.props.history.push('/'))
	}

	render() {
		return(
			<div className="profile-page">
				<p className="B-counter">B COUNTER</p>
				<p className="profile">Profile</p>
				<Profile state={this.state} />
				<a className="delete-account" onClick={this.deleteUserInfo}>delete account</a>
			</div>
		)
	}
}

export default ProfileContainer;