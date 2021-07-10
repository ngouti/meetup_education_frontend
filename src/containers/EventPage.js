import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar'



export default class EventPage extends Component {
    state = {
        selectedEvent: {},
        organizer: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/events/${this.props.match.params.id}`,{
            'headers': {
                'Authorization': `Bearer ${this.props.token}`
            }
        })
        .then( res => res.json())
        .then( selectedEvent => this.setState({ selectedEvent }))
    }


    onAttend = () => {
        fetch(`http://localhost:3000/events/${this.state.selectedEvent.id}/create_attendee`, {
            'method': 'post',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            },
            'body': JSON.stringify({
                user_id: this.props.currentUser.id, // find out if this is the best way to get current user
                event_id: this.state.selectedEvent.id
            })
        })
        .then( res => res.json())
        .then( () => this.props.history.push(`/users/${this.props.currentUser.id}`)) 
    }




    patchRequest = () => {
        fetch(`http://localhost:3000/events/${this.state.selectedEvent.id}`,{
            'method': 'patch',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            },
            'body': JSON.stringify(
                {
                  title: this.state.selectedEvent.title,
                  description: this.state.selectedEvent.description
                  
                }
            )
        })
    }




    render() {  
        const { title, description, location, date } = this.state.selectedEvent
        console.log(this.state.selectedEvent)
        
        return (
        <div>
            <Container>    
                
                <div class="ui raised very padded text container segment">
                <h2 class="ui header">{title}</h2>
                <p> Date: {date}</p>
                <p> Location: {location}</p>
                <p> Description: {description}</p>

                <div class="ui buttons">
                    <button 
                        class="ui button"
                        onClick={() => this.props.history.push('/events')}
                    >
                        Go Back to All Events
                    </button>
                    <div class="or"></div>
                    

                    { this.props.currentUser 
                    ?   
                      
                        <button 
                        class="ui positive button"
                        onClick = { this.onAttend }
                        >
                        Attend this Event
                        </button>
                    : 
                        <div>
                            <button 
                            class="ui secondary button"
                            onClick = { this.onEdit }
                            >
                            Edit this Event
                            </button>
                        
                            <button 
                            class="ui negative button"
                            onClick = { this.onDelete }
                            >
                            Delete this Event
                            </button>
                      
                        </div>
                    }
                    
                </div>
                </div>
            
            </Container>
        </div>    
        )
    }
}
