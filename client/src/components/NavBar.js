import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Bootstrap from 'bootstrap';
import axios from 'axios'; 

 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };


  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // logout = (e) => {
  //   e.preventDefault();
  //   console.log('Loggin out...');
  //   axios.get('/user/signout')
  //   .then(res => {
  //     console.log('LOGOUT RESPONSE:', res);
  //     this.props.updateUser({
  //       loggedIn: false,
  //       email: res.data.username,
  //       id: res.data.id
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('Logout Error:', err);
  //   });
  // }

  // handleSignout = () => {
  //   return this.props.signOut()
  // }

  render() {
    const loggedIn = this.props.loggedIn;
    // console.log(this.props);
    return (

      loggedIn ? (
 
        <nav className='navbar navbar-light bg-light'>
          <Link to='/' className='navbar-brand' >easyBook</Link>
          <Link to='/' className='nav-link' onClick={() => this.props.signOut}> Log Out</Link>
        </nav>
      
      ) : (

        <nav className='navbar navbar-light bg-light'> 
          <Link to='/' className='navbar-brand'>easyBook</Link>
          <Link to='/signin' className='nav-link'> Log In </Link>
          <Link to='/signup' className='nav-link'> Sign Up</Link>
        </nav>

      )
    )
  }

}

export default NavBar;

 