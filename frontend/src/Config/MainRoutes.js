import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Home from '../Components/home/Home';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import OverviewContainer from '../Containers/overview/OverviewContainer'

export default withRouter(({setCurrentUser, currentUser, logout, history}) => {
  const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render = {(props) => (
      currentUser
        ? <Component {...props} logout={logout}/>
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
        <PrivateRoute path = '/overview' component={OverviewContainer} logout={logout}/>
      </Switch>     
    </div>
  )
})