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


