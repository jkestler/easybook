import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Example extends React.Component {
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
    return (
      <div>
        <Navbar className="navigation" color="light" light  expand="md">
          <NavbarBrand className="nav-brand" href="/">easyBook</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="nav-items" navbar>
              <NavItem className="nav-item"> 
                <NavLink href="/components/">Sign Up</NavLink>
              </NavItem>
              <NavItem className="nav-item"> 
                <NavLink href="https://github.com/reactstrap/reactstrap">Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}