import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Event extends Component {

    state = {
        organizers: [],
        attendees: []
    }


  render() {
    console.log('this.props',this.props)
    console.log('this.props.event',this.props.event.title)

    return (
      <div>

          
         <Card>
            <Card.Content>
                <Card.Header>{this.props.event.title}</Card.Header>
                <Card.Meta>{this.props.event.interests}</Card.Meta>
                <Card.Description>
                    {this.props.event.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Link to={`/events/${this.props.event.id}`}>
                    <Button basic color='blue' >
                        View Details
                    </Button>
                </Link>
                </div>
            </Card.Content>
        </Card>
      </div>
    )
  }
}
