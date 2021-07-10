import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


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
        <p style={{textAlign: "center"}} className="lead">{props.school}</p>
      </Jumbotron>
    </div>
  );
};

export default UserCard;