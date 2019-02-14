import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar'



export default class EventPage extends Component {
    state = {
        selectedEvent: {}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/events/${this.props.match.params.id}`)
            .then( res => res.json())
            .then( selectedEvent => this.setState({ selectedEvent }))
    }

    render() {
        console.log(this.props)
        
        const { title, description, date, interest_ids, organizer_ids } = this.state.selectedEvent
        
        return (
        
        <div>
        <NavBar />
        <Container>    
             
            <div class="ui raised very padded text container segment">
            <h2 class="ui header">{title}</h2>
            <p> {description}</p>
            <p></p>

            <div class="ui buttons">
                <button 
                    class="ui button"
                    onClick={() => this.props.history.push('/events')}
                >
                    Go Back to All Events
                </button>
                <div class="or"></div>
                <button class="ui positive button">
                    Attend this Event
                </button>
            </div>
            </div>
          
        </Container>
        </div>
        
        )
    }
}
