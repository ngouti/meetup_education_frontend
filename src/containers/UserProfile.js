import React, { Component } from 'react';
import NavBar from './NavBar'

export default class UserProfile extends Component {

    state = {
        user: {}
    }

    componentDidMount(){
        // console.log(`${this.props.match.params.id}`)
        fetch(`http://localhost:3000/users/${this.props.match.params.id}`,{
            headers:{
                Authorization: `BEARER ${this.props.token}`
            }
        })
            .then( res => res.json())
            .then( user => this.setState({ user }))
    }

    render() {
        // console.log(this.state.user)
        const { name, email } = this.state.user
        return (
            <div>
                <NavBar user={this.state.user} name={name}/>
            </div>
        );
    }
}


