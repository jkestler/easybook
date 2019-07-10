import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';

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
    // const { user } = this.props.user;
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/"> easyBook </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
<div>
  <Navbar className="navigation" color="light" light  expand="md">
    <NavbarBrand className="nav-brand" href="/">easyBook</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="nav-items" navbar>
        <NavItem className="nav-item"> 
          <NavLink href="/signup">Sign Up</NavLink>
        </NavItem>
        <NavItem className="nav-item"> 
          <NavLink href="/signin">Sign In</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>