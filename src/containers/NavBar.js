import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MeetUp Education</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
           

              {
                this.props.currentUser
                ?
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink>
                        <Link to="/events"> See All Events </Link> 
                      </NavLink>
                    </NavItem>


                    <NavItem>
                      <NavLink>
                        <Link to="/events"> See All Events </Link> 
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink>
                        <Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.name}</Link> 
                      </NavLink>
                    </NavItem>
                    <div onClick={ this.props.logout }>
                    <NavItem >
                      <NavLink>
                        <Link to='/' > Logout </Link> 
                      </NavLink>
                    </NavItem>
                    </div>
                    {/* <NavItem >
                      <div onClick={ this.props.logout }>
                        Logout
                      </div>
                     
                    </NavItem> */}
                  </Nav>
                
                :
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                    <div onClick={ this.props.login }>
                    <NavItem >
                      <NavLink>
                        <Link to="/login"> Login </Link> 
                      </NavLink>
                    </NavItem>
                    </div>
                      {/* <NavLink> 
                        <Link to="/login"> Login </Link> 
                      </NavLink> */}

                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link to="/signup"> Sign Up </Link> 
                      </NavLink>
                    </NavItem>
                  </Nav>
              }
    
          </Collapse>
        </Navbar>
      </div>
    );
  }
}