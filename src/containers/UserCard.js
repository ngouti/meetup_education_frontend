import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
    // console.log(props)

    // handleClick = () => {
    //     browserHistory.push('/events/new');
    // }
  return (

    <div>
      <Jumbotron>
        <h1 style={{textAlign: "center"}} className="display-3">{props.name}</h1>
        <p style={{textAlign: "center"}} className="lead">{props.email}</p>
        <hr className="my-2" />
        <p style={{textAlign: "center"}}>{props.school}</p>
        <p className="lead">
        {/* <Link to={`/events/new`}>
                    <Button className="btn btn-primary center-block"  basic color='blue' >
                        Create Event
                    </Button>
                </Link> */}
          {/* <Button onClick={this.handleClick}className="btn btn-primary center-block" color="primary">Create an Event</Button> */}
        </p>
      </Jumbotron>
    </div>
  );
};

export default UserCard;