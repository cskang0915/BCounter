import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends Component {

  state = {
    email: '',
    password: '',
    rowid: '',
    error: null
  }

  componentDidMount() {
    if(localStorage.getItem('uid')) {
      // added weekly to overview below because weekly will be default view
      this.props.history.push('/overview')
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const user = this.state

    fetch(`${process.env.REACT_APP_API}/api/user/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === 200) {
        this.props.setCurrentUser(data.signedJwt);
        this.setState({
          rowid: data.id.id
        })
        // added weekly to overview below because weekly will be default view
        this.props.history.push("/overview/weekly");
      } else {
        alert("incorrect username or password");
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
      <div className = "form-login">
        <div className="app-name">
          <p>B COUNTER</p>
        </div>
        <div className = "welcome-back">
          <p>Welcome!</p>
        </div>
        <div className = "login-instructions">
          <p>Please enter your Username &amp; Password to log in.</p>
          <div className="sign-up">
            <p>Don't have an account? <Link to='/register'>Sign Up.</Link></p>
          </div>
        </div>
        <form onSubmit = {this.handleSubmit}>
          <div className="email">
            {/* <label>Username</label> */}
            {/* <i className = "fa fa-user-o fa-lg fa-fw"></i> */}
            <input
              type="text" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange}
              placeholder=" Email"
            />
          </div>
          <div className="login-password">
            {/* <label>Password</label> */}
            <input
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              placeholder=" Password"
            />
            {/* <i className = "fa fa-lock icon"></i> */}

          </div>
            <button type = "submit" className="form-login-button">Log in</button>
        </form>
          <a href="#" className="form-login-forgotPW">Forgot Password?</a>
      </div>
    )
  }
}

export default Login
