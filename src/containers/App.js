import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router'

import Login from './Login'
import SignUp from './SignUp'
import UserProfile from './UserProfile'
import EventList from './EventList'


import NavBar from './NavBar'




class App extends Component {


  state = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || {}
  }

  setCurrentUser = (token, user) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.setState ({ 
      token: token, 
      user: user 
    })
  }

  



  logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setCurrentUser(null);
    this.props.history.push("/login");
  }



  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Router>
        <Switch>
          {/* <NavBar /> */}
          <Route path="/EventList" component={(props) =>  <EventList {...props} />} />
        <Route path="/users/:id" component={props => <UserProfile {...props} token={this.state.token} />} />

        <Route path="/login" render={(props) =>  <Login {...props} setUser={this.setCurrentUser} />} />
        <Route path="/signup" render={ props => <SignUp {...props} onSignUp={this.setCurrentUser} />}/>
        </Switch>
      </Router>
       
      </div>
    );
  }
}

export default App;
