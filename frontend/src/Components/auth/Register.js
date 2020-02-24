import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

class Register extends Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
    error: null
  }

  handleChange = (event) => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value.toLowerCase()
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }


  handleSubmit = (event) => {
    event.preventDefault()

    const newUser = this.state
    
    fetch(`${process.env.REACT_APP_API}/api/user/register`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === 201){
        this.props.history.push('/')
      } else {
        alert('Username or email is already taken')
      }
    })
    .catch(err => {
      this.setState({
        error: err
      })
    })
  }

  render() {
    return (
      <div className = "form-register">
        <div className="app-name">
          <p>B COUNTER</p>
        </div>
        <div className="create-new-acc">
          <p>
          Create A New Account
          </p>
        </div>
        <form onSubmit = {this.handleSubmit}>
          <div className ="first-name">
            {/* <label>First Name</label> */}
            <input 
              type="text" 
              name="first_name" 
              value={this.state.first_name} 
              onChange={this.handleChange} 
              placeholder="First Name"
            />
          </div>
          <div className ="last-name">
            {/* <label>Last Name</label> */}
            <input 
              type="text" 
              name="last_name" 
              value={this.state.last_name} 
              onChange={this.handleChange} 
              placeholder="Last Name"
            />
          </div>
          <div className ="email">
            {/* <label>Email</label> */}
            <input 
              type="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              placeholder="Email"
            />
          </div>
          <div>
            {/* <label>Password</label> */}
            <input className ="password"
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              placeholder="Password"
            />
          </div>
          <div>
            {/* <label>Re-enter Password</label> */}
            <input className ="password"
              type="password" 
              name="password2" 
              value={this.state.password2} 
              onChange={this.handleChange} 
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="create-account-button"
          >Create Account
          </button>
        </form>
        <p className="already-registered">Already a member?<Link to="/login" className="link-to-login">&nbsp;Log in</Link></p>
      </div>
    )
  }
}

export default Register
