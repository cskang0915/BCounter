import React, { Component } from 'react';
import EditProfileForm from '../../Components/profile/EditProfileForm';

class EditProfileContainer extends Component {
	state = {
		rowid: null,
		first_name: '',
		last_name: '',
		username: '',
		email: ''
	}

	componentDidMount() {
		this.getUserInfo();
	}

	handleChange = (event) => {
	    let target = event.target
	    let name = target.name
	    let value = target.value
	    this.setState({[name]:value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
	    const entry = this.state
	    fetch(`${process.env.REACT_APP_API}/api/user/update/profile`, {
		    method: 'PUT',
	    	headers: {
	        	'authorization': `Bearer ${localStorage.uid}`,
	        	'Content-Type': 'application/json'
				},
	    	body: JSON.stringify(entry)
			})
				.then(res => res.json())
				.then(() => this.props.history.push('/overview/profile'))
				.catch(err => console.log(err))
	}

	getUserInfo = () => {
		fetch(`${process.env.REACT_APP_API}/api/user/info`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				rowid: data.rowId,
				first_name: data.user[0].first_name,
				last_name: data.user[0].last_name,
				username: data.user[0].username,
				email: data.user[0].email
			})
		})
	}

	render(){
		return(
			<div>
				<EditProfileForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default EditProfileContainer