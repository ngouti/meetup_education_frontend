import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
    // console.log(this.props.currentUser)
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
                      <NavLink href="./EventList">Events</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="./EventsContainer">My Events</NavLink>
                    </NavItem>
                    <NavItem>
                     {/* <NavLink href="UserProfile">{this.props.name}</NavLink>  */}
                      <NavLink href="UserProfile">{this.props.currentUser.name}</NavLink>
                    </NavItem>
                  </Nav>
                
                :
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="./login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="./signup">Sign Up</NavLink>
                    </NavItem>
                  </Nav>
              }
    
          </Collapse>
        </Navbar>
      </div>
    );
  }
}