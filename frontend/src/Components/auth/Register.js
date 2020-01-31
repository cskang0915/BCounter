import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {

  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
    error: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newUser = this.state
    
    fetch(`http://localhost:4000/api/user/register`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('here')
      if(data.status === 201){
        this.props.history.push('/')
      } else {
        console.log(data)
        alert('Username or email is already taken')
      }
    })
    .catch(err => {
      console.log(err)
      this.setState({
        error: err
      })
    })
  }

  render() {
    return (
      <div className = "form-register">
        <form onSubmit = {this.handleSubmit}>
          <div className ="form-group-register">
            <label>First Name</label>
            <input 
              type="text" 
              name="first_name" 
              value={this.state.first_name} 
              onChange={this.handleChange} 
              placeholder="Enter First Name"
            />
          </div>
          <div className ="form-group-register">
            <label>Last Name</label>
            <input 
              type="text" 
              name="last_name" 
              value={this.state.last_name} 
              onChange={this.handleChange} 
              placeholder="Enter Last Name"
            />
          </div>
          <div className ="form-group-register">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.username} 
              onChange={this.handleChange} 
              placeholder="Enter Username"
            />
          </div>
          <div className ="form-group-register">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              placeholder="Enter Email"
            />
          </div>
          <div className ="form-group-register">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              placeholder="Enter Password"
            />
          </div>
          <div className ="form-group-register">
            <label>Re-enter Password</label>
            <input 
              type="password" 
              name="password2" 
              value={this.state.password2} 
              onChange={this.handleChange} 
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="button-submit"
          >Register
          </button>
        </form>
        <div>
          <p>Already a member? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    )
  }
}

export default Register
