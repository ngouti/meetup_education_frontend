import React from 'react';
import { Button, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
// import { Form } from 'reactstrap'; // commenting this out because it is duplicated with semantic
import './eventform.css'
import NavBar from './NavBar'
import { Form } from 'semantic-ui-react'
 

export default class EventForm extends React.Component {

  state = {
    title: '',
    description: ''
    // date: '',
    // interest_ids: [], //selected type in form
    // allInterests: [],
    // organizer_ids: []
  }


  handleSubmit = (e) => {
    
    this.setState({
        title: e.target.title.value,
        description: e.target.description.value
      }, () => this.postNewEvent())

  }


  postNewEvent = () => {
    console.log('before post fetch', this.state)
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
        title: this.state.title,
        description: this.state.description
        // interest_ids: this.state.interest_ids,
        // organizer_ids: []
        }
      )
    })
    .then( res => res.json())
    .then( ({ id }) => this.props.history.push(`/events/${id}`)) 
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar />
        <div className="ui raised very padded text container segment">
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <h3>Create an Event</h3>

        <FormGroup>
          <Label for="title">Title of Event</Label>
          <Form.Input fluid name="title" placeholder="Name of this event" />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Form.TextArea fluid name="description" placeholder='Tell us more about the event...' />
        </FormGroup>
       
        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="eventDate"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventTime">Time</Label>
          <Input
            type="time"
            name="time"
            id="eventTime"
          />
        </FormGroup>


        <FormGroup>
          <Label for="exampleCheckbox">Choose Event Category</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
          </div>
        </FormGroup>

        <Form.Button>Submit</Form.Button>
      
      </Form>
      </div>
      </div>
    );
  }
}
