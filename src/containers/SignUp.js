import React from "react";

// import { server } from './server'
import './signup.css'

export class SignUp extends React.Component {
  state =  { 
        username: "", 
        email: "", 
        password: "" , 
        name: "" , 
        school: "" 
    }
    

    handleChange = (e) => {
      // debugger
      // console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  handleSubmit = e => {
    e.preventDefault()

    // debugger
    // console.log(this.state)
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify(this.state)
  })
      .then(resp => resp.json())
      .then(() => {
        this.routeTo('/login')
         })

      // .then(console.log)


    // server.post(`http://localhost:3000/users`, JSON.stringify(this.state))
    //         .then(user => console.log('user', user))
            // .then(() => {
            //     this.routeTo('/login')
            //   })
            // //   debugger
            //   .then(console.log)

  }

  routeTo = url => {
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="signup">
      <form onSubmit={e => {this.handleSubmit(e);}}>
        <h3>SignUp</h3>
        <div>
          <label>Username</label>
            <input
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                type="text"
                onChange={e => this.handleChange(e)}
            />
        </div>
        <div>
          <label>Email</label>
            <input
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                type="email"
                onChange={e => this.handleChange(e)}
            />
        </div>

        <div>
          <label>Password</label>
            <input
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                type="password"
                onChange={e => this.handleChange(e)}
            />
        </div>
        <div>
          <label>Name</label>
            <input
                name="name"
                placeholder="Enter Name"
                value={this.state.name}
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
      </div>
    );
  }
}

export default SignUp