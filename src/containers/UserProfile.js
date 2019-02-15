import React, { Component } from 'react';
import EventCard from './EventCard'
import UserCard from './UserCard'
import EventForm from './EventForm'
import './UserProfile.css'

export default class UserProfile extends Component {

    //FILTER THROUGH STATE AND DISPLAY EACH
    state = {
        user: {},
        organizing: [],
        filteredOrganizing: [],
        attending: [],
        filteredAttending: []
        
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.match.params.id}`,{
            headers:{
                Authorization: `BEARER ${this.props.token}`
            }
        })
            .then( res => res.json())
            .then( user => this.setState({ user }))
            .then(() => this.fetchUserEvents())
            .then(() => this.fetchArrangementsEvents())

    }

    fetchUserEvents() {
        fetch(`http://localhost:3000/users/${this.props.match.params.id}/organizers`,{
            method: 'GET',
            headers:{
                "Content-Type": 'application/json',
                Authorization: `BEARER ${this.props.token}`
            }
        })
        .then(res => res.json())
            .then( organizing => this.setState({ organizing }))
            .then(() => this.filterForOrganizing())

    }

    filterForOrganizing(){
        let events = this.state.organizing[1]
        let userevents = this.state.organizing[0].filter(ue => (
            ue.user_id === this.state.user.id
        ))
        let arrayofEvents = userevents.map(ue => ue.event_id)
        let events_organizing = arrayofEvents.map(id => events.filter(e => e.id === id))
        this.setState({
            organizing: events_organizing
        })
    }

    fetchArrangementsEvents(){
        fetch(`http://localhost:3000/users/${this.props.match.params.id}/attending`,{
            method: 'GET',
            headers:{
                "Content-Type": 'application/json',
                Authorization: `BEARER ${this.props.token}`
            }
        })
            .then(res => res.json())
            .then( attending => this.setState({ attending }))
            .then(() => this.filterForAttending())

    }

    filterForAttending(){
        let events = this.state.attending[1]
        let userattending = this.state.attending[0].filter(ue => (
            ue.user_id === this.state.user.id
        ))
        let arrayofEvents = userattending.map(ue => ue.event_id)
        let events_attending = arrayofEvents.map(id => events.filter(e => e.id === id))
        this.setState({
            attending: events_attending
        })
    }

  

    render() {
       
        const { name, email } = this.state.user

        return (
            <div className="ui raised very padded text container segment">
            {/* <div > */}
                <UserCard {...this.state.user}/>
    
                
                {/* <div style={{width: '50%', float: 'left'}}> */}

                    <h4> Events You're Organizing:  </h4>
                    
                    
                
                        {this.state.organizing.map(o => (
                            o.map(i => (
                                <EventCard event={i}/> 
                            ))
                            
                        ))}
                    
                {/* </div> */}

                {/* <div style={{width: '50%', float: 'left'}}> */}
                    <h4> Events You're Attending:  </h4>

                
                    {this.state.attending.map(o => (
                        o.filter(i=>
                        i.title !== null
                        ).map(i => (
                            <EventCard event={i}/> 
                        ))
                    
                    ))}
                    
                {/* </div> */}
            </div>
        );
    }
}

