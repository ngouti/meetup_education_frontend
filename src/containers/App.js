import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router'

import Login from './Login'
import SignUp from './SignUp'
import UserProfile from './UserProfile'
import EventList from './EventList'
import EventForm from './EventForm'
import NavBar from './NavBar'
import EventPage from '../containers/EventPage';
import Home from './Home';




class App extends Component {


  state = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null
   
  }

  setCurrentUser = (token, user) => {
    // console.log('before',user)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.setState ({ 
      token: token, 
      user: user 
    })
  }

  logout = () => {
    localStorage.clear()
    this.setState({ token: null, user: null})
  
  }

  render() {
    
    return (
      <div className="App">

     
      <Router>
        <React.Fragment>
        <NavBar currentUser={this.state.user} logout={this.logout}/>

        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/home" render={(props) => <Home />} />

          {
            !this.state.user
            ? 
              <React.Fragment>
                <Route path="/login" render={(props) => <Login {...props} setUser={this.setCurrentUser} />} />
                <Route path="/signup" render={ props => <SignUp {...props} onSignUp={this.setCurrentUser} />}/>
                {console.log('this far')}
              </React.Fragment>
            :
            <React.Fragment>
        {/* <NavBar currentUser={this.state.user} logout={this.logoutUser}/>

        <Switch> */}
          
            {/* if(this.state.user === {} || this.state.user === null)
            ?  */}
              {/* <React.Fragment> */}
                {/* <Route path="/login" render={(props) => <Login {...props} setUser={this.setCurrentUser} />} />
                <Route path="/signup" render={ props => <SignUp {...props} onSignUp={this.setCurrentUser} />}/>
              {/* </React.Fragment> */}
            {/* : */}
            {/* <React.Fragment> */}
              <Route exact path="/events" component={(props) =>  <EventList {...props} token={this.state.token} />} />
              <Route path="/events/new" component={(props) =>  <EventForm {...props} token={this.state.token} currentUser={this.state.user} />} />
              <Route path="/events/:id" component={(props) =>  <EventPage {...props} token={this.state.token} currentUser={this.state.user} />} />
              <Route path="/events/:id/edit" component={(props) =>  <EventForm {...props} token={this.state.token}  />} />
              <Route path="/users/:id" component={props => <UserProfile {...props} token={this.state.token} currentUser={this.state.user}/>} />
            </React.Fragment>

          }
            {/* </React.Fragment> */}

          {/* } */}
          

          
        </Switch>
        </React.Fragment>
      </Router>
       
      </div>
    );
  }
}

export default App;