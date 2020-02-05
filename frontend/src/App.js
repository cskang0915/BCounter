import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Routes from './Config/MainRoutes';

class App extends Component {
  state = {
    currentUser: this.checkUserValid()
  }

  checkUserValid() {
    let token = localStorage.getItem('uid');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('uid');
        token = null;
      }
    }
    return token;
  }

  setCurrentUser = (token) => {
    this.setState({
      currentUser: token
    })
    localStorage.setItem('uid', token)
  }

  logout = () => {
    this.setState({
      currentUser: null
    })

    localStorage.removeItem('uid')

    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Routes currentUser = {this.state.currentUser} setCurrentUser = {this.setCurrentUser} logout = {this.logout}/>
      </div>
    )
  }
}

export default withRouter(App);
