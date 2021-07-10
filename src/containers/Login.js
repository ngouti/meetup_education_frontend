import React from 'react'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './login.css'
import { Alert } from "react-bootstrap";

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        errors: null
    }

    routeTo = url => {
        this.props.history.push(url)
      }

      handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  
  
    errorBox() {
      
      if (  this.state.errors) {
        return (
          <Alert role="alert">
            {  this.state.errors }
          </Alert>
        )    
      }
    }

      login = e => {
        e.preventDefault();
        // console.log(e)
        // debugger
        fetch(`http://localhost:3000/auth` , {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
          .then(res => res.json())
          // .then(res => {
          //   this.props.setUser(res.token, res)
          //   this.props.history.push(`/users/${res.id}/UserProfile`)
        
          //   })
  
          .then(res => {
            if (res.message === "Wrong username or password") {
              this.setState({ errors: res.message })
            } else {
              this.props.setUser(res.token, res)
              this.props.history.push(`/users/${res.id}/UserProfile`);
            }
      });
      }
    
    
      render() {


        return (
          <div>
              {this.errorBox()}
            
          <div className="ui raised very padded text container segment">
        
            

          <h1>Login</h1>
              <Form>
                <FormGroup row>
                <Label for="exampleEmail" sm={2} size="lg">UserName</Label>
                <Col sm={10}>
                    <Input onChange={this.handleChange} value={this.state.username} name="username" type="text" placeholder="UserName" bsSize="lg" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="exampleEmail2" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input onChange={this.handleChange} value={this.state.password} name="password" type="password" placeholder="Password" />
                </Col>
                </FormGroup>
                <Button onClick={this.login}>Submit</Button>
            </Form>
          </div>




          </div>
        )
      }
    
      
}



export default Login