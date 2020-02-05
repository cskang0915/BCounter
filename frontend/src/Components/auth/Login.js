import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  state = {
    username: '',
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

    fetch(`http://localhost:4000/api/user/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      console.log('here')
      console.log(res)
      return res.json()
    })
    .then(data => {
      console.log(data)
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
        <form onSubmit = {this.handleSubmit}>
          <div>
            {/* <label>Username</label> */}
            <input className ="form-login-username"
              type="text" 
              name="username" 
              value={this.state.username} 
              onChange={this.handleChange}
              placeholder="     Username"
            />
          </div>
          <div>
            {/* <label>Password</label> */}
            <input className ="form-login-password" 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              placeholder="     Password"
            />
          </div>
            <button type = "submit" className="form-login-button">Log in</button>
        </form>
          <a href="#" className="form-login-forgotPW">Forgot Password?</a>
      </div>
    )
  }
}

export default Login
