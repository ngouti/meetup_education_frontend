import React from 'react';
import { Button, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
// import { Form } from 'reactstrap'; // commenting this out because it is duplicated with semantic
import './eventform.css'
import NavBar from './NavBar'


import { Form } from 'semantic-ui-react'
 

export default class EventForm extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui raised very padded text container segment">
      <Form>
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
