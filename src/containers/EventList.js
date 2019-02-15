import React, { Component } from 'react'
import EventCard from './EventCard';
import { Card } from 'semantic-ui-react'
import { Route, Link} from 'react-router-dom'
import NavBar from './NavBar'


export default class EventList extends Component {

    state = {
        events: [] 
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/events', {
          'method': 'get',
          'headers': {
            'Authorization': `Bearer ${this.props.token}`
          }

        })
        .then(res => res.json())
        .then( json => this.setState({
          events: json
    }))}

  

    render() {
      
        return (
        <div>
          <br />
          <Card.Group>
            {this.state.events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </Card.Group>
        </div>
        )
    }
}










// import React from 'react';
// import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
//  CardSubtitle, CardBody } from 'reactstrap';

// const EventList = (props) => {
//   return (
//     <CardGroup>
//       <Card>
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//       <Card>
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//       <Card>
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </CardGroup>
//   );
// };
