import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';

 class NavBar extends Component {
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
        <Navbar className='navbar' color='dark' dark expand='md'>
          <Collapse isOpen={this.state.isOpen} navbar>
          <NavbarToggler onClick={this.toggle} />
          <Link to='/'> easyBook </Link>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/signup'>Sign Up</Link>
              </NavItem>
              <NavItem>
                <Link to='/signin'>Sign In</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;