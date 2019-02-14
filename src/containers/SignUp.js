import React from "react";

import { server } from './server'


export class SignUp extends React.Component {
  state =  { 
        username: "", 
        email: "", 
        password: "" , 
        name: "" , 
        school: "" 
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  handleSubmit = e => {
    server.post(`http://localhost:3000/users`, JSON.stringify(this.state))
            .then( user => {
                this.props.onSignUp(user.token, user)
            })
            .then(() => {
                this.routeTo('/login')
              })
            //   debugger
            //   .then(console.log)

  }

  routeTo = url => {
    this.props.history.push(url);
  }

  render() {
    return (
      <form onSubmit={e => {this.handleSubmit(e);}}>
        <h3>SignUp</h3>
        <div className="form">
          <label>Username</label>
            <input
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                className="form-control"
                type="text"
                onChange={e => this.handleChange(e)}
            />
        </div>
        <div className="form">
          <label>Email</label>
            <input
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                className="form-control"
                type="email"
                onChange={e => this.handleChange(e)}
            />
        </div>

        <div className="form">
          <label>Password</label>
            <input
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                className="form-control"
                type="password"
                onChange={e => this.handleChange(e)}
            />
        </div>
        <div className="form">
          <label>Name</label>
            <input
                name="name"
                placeholder="Enter Name"
                value={this.state.name}
                className="form-control"
                type="name"
                onChange={e => this.handleChange(e)}
            />
        </div>
        <div className="form">
          <label>School</label>
            <input
                name="school"
                placeholder="Enter School"
                value={this.state.school}
                className="form-control"
                type="school"
                onChange={e => this.handleChange(e)}
            />
        </div>
        <button >Sign Up</button>
      </form>
    );
  }
}

export default SignUp