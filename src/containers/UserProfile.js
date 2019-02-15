import React, { Component } from 'react';
import NavBar from './NavBar'

export default class UserProfile extends Component {

    //FILTER THROUGH STATE AND DISPLAY EACH
    state = {
        user: {},
        organizing: [],
        attending: []
        
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
       console.log(this.state.organizing)
       console.log(this.state.attending)

        const { name, email } = this.state.user
        return (
            <div className="ui raised very padded text container segment">

            <h3>{name}</h3>
            <p>
             <h4> Contact Info:  </h4>
             {email} 
            </p>
            
         </div>
        );
    }
}

