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
  }

  routeTo = url => {
    this.props.history.push(url);
  }

  
  render() {
    return (
      <div className="ui raised very padded text container segment signup">
  
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








// render() {
//   return (
//       <div className="ui raised very padded text container segment signup">
         

//         <h1>Sign Up</h1>
//             <Form>
//               <FormGroup row>
//               <Label for="exampleEmail" sm={2} size="lg">Username</Label>
//               <Col sm={10}>
              
//                   <Input onChange={e => this.handleChange(e)} value={this.state.username} name="username" type="text" placeholder="Enter UserName" bsSize="lg" />
//               </Col>
//               </FormGroup>

//               <FormGroup row>
//               <Label for="exampleEmail" sm={2} size="lg">Email</Label>
//               <Col sm={10}>
              
//                   <Input onChange={e => this.handleChange(e)} value={this.state.email} name="email" type="text" placeholder="Enter Email Address" bsSize="lg" />
//               </Col>
//               </FormGroup>


//               <FormGroup row>
//               <Label for="exampleEmail" sm={2} size="lg">Name</Label>
//               <Col sm={10}>
              
//                   <Input onChange={e => this.handleChange(e)} value={this.state.email} name="name" type="text" placeholder="Enter Your Name" bsSize="lg" />
//               </Col>
//               </FormGroup>



//               <FormGroup row>
//               <Label for="exampleEmail" sm={2} size="lg">School</Label>
//               <Col sm={10}>
              
//                   <Input onChange={e => this.handleChange(e)} value={this.state.email} name="school" type="text" placeholder="Enter School" bsSize="lg" />
//               </Col>
//               </FormGroup>

//               <FormGroup row>
//               <Label for="exampleEmail2" sm={2}>Password</Label>
//               <Col sm={10}>
//                   <Input onChange={e => this.handleChange(e)} value={this.state.password} name="password" type="password" placeholder="Password" />
//               </Col>
//               </FormGroup>
//               <Button onClick={this.login}>Submit</Button>
//           </Form>
//         </div>
//   )



// }}