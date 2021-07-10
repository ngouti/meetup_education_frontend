import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
      console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  handleSubmit = e => {
    e.preventDefault()

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
  }

  routeTo = url => {
    this.props.history.push(url);
  }


render() {
  return (
      <div className="ui raised very padded text container segment signup">
         

        <h1>Sign Up</h1>
            <Form onSubmit={e => {this.handleSubmit(e);}}>
              <FormGroup row>
              <Label for="exampleEmail" sm={2} size="lg">Username</Label>
              <Col sm={10}>
              
                  <Input onChange={e => this.handleChange(e)} value={this.state.username} name="username" type="text" placeholder="Enter UserName" bsSize="lg" />
              </Col>
              </FormGroup>

              

              <FormGroup row>
              <Label for="exampleEmail" sm={2} size="lg">Email</Label>
              <Col sm={10}>
              
                  <Input onChange={e => this.handleChange(e)} value={this.state.email} name="email" type="text" placeholder="Enter Email Address" bsSize="lg" />
              </Col>
              </FormGroup>


              <FormGroup row>
              <Label for="exampleEmail" sm={2} size="lg">Name</Label>
              <Col sm={10}>
              
                  <Input onChange={e => this.handleChange(e)} value={this.state.name} name="name" type="text" placeholder="Enter Your Name" bsSize="lg" />
              </Col>
              </FormGroup>



              <FormGroup row>
              <Label for="exampleEmail" sm={2} size="lg">School</Label>
              <Col sm={10}>
              
                  <Input onChange={e => this.handleChange(e)} value={this.state.school} name="school" type="text" placeholder="Enter School" bsSize="lg" />
              </Col>
              </FormGroup>

              <FormGroup row>
              <Label for="exampleEmail2" sm={2}>Password</Label>
              <Col sm={10}>
                  <Input onChange={e => this.handleChange(e)} value={this.state.password} name="password" type="password" placeholder="Password" />
              </Col>
              </FormGroup>
              <Button onClick={this.login}>Submit</Button>
          </Form>
        </div>
  )

}}

export default SignUp