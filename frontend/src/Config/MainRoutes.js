import React, { Component } from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import OverviewContainer from '../Containers/OverviewContainer';

export default withRouter(({setCurrentUser, currentUser, history}) => {
  const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render = {(props) => (
      currentUser
        ? <Component {...props}/>
        : <Redirect to = '/login' />
    )} />
  }
  return (
    <div>
      <Switch> 
        <Route exact path = '/' component={Home} />
        <Route exact path = '/home' component={Home} />
        <Route path = '/login' render={() => <Login history = {history} setCurrentUser = {setCurrentUser} />}/>
        <Route path = '/register' component={Register} />
        <PrivateRoute path = '/overview' component={OverviewContainer} />
      </Switch>     
    </div>
  )
})