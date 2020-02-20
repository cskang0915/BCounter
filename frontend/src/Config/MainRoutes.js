import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Home from '../Components/home/Home';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import OverviewContainer from '../Containers/overview/OverviewContainer'

export default withRouter(({setCurrentUser, currentUser, logout, history, location}) => {
  const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render = {(props) => (
      currentUser
        ? <Component {...props} logout={logout} location={location}/>
        : <Redirect to = '/login' />
    )} />
  }
  return (
    <div>
      <Switch> 
        <Route exact path = '/' render={() => <Login history = {history} setCurrentUser = {setCurrentUser} />}/>
        <Route exact path = '/login' render={() => <Redirect to='/' />}/>
        {/* <Route exact path = '/' component={Login} /> */}
        <Route exact path = '/home' component={Home} />
        <Route path = '/register' component={Register} />
        <PrivateRoute path = '/overview' component={OverviewContainer} logout={logout} location={location}/>
      </Switch>     
    </div>
  )
})