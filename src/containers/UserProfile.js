import React, { Component } from 'react';
import NavBar from './NavBar'

export default class UserProfile extends Component {

    state = {
        user: {} // note:this is the user of the page we're not, but NOT current user
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
       
        const { name, email } = this.state.user
        return (
            <div>
                {/* <NavBar user={this.state.user} name={name} currentUser={this.props.currentUser}/> */}
            </div>
        );
    }
}

