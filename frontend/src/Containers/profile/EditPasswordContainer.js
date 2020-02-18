import React, { Component } from 'react';
import EditPasswordForm from '../../Components/profile/EditPasswordForm';

class EditPasswordContainer extends Component {

  state = {
    rowid: null,
    password: '',
    password2: ''
  }

  handleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const password = this.state
    fetch(`${process.env.REACT_APP_API}/api/user/update/password`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.uid}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(password)
    })
      .then(res => res.json())
      .then(() => alert("You've changed your password!"))
      .then(() => this.props.history.push('/overview/profile'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <EditPasswordForm 
          state={this.state} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default EditPasswordContainer
