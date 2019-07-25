import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Bootstrap from 'bootstrap';
// import axios from 'axios'; 

import logo from '../assets/img/logo_transparent_white.png';
import logoLogout from '../assets/img/logo_transparent.png';

 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };


  }

  componentDidUpdate = () => {
    // JSON.parse(localStorage.getItem('loggedIn'));
    // localStorage.getItem('loggedIn');
  }
  

  render() {
    // const loggedIn = this.props.loggedIn ;
    // console.log(this.props);
    return (

      this.props.loggedIn ? (
 
        <nav className='navbar mr-3' id='navBar'>
          <a href='/' className='navbar-brand'><img id='logoutLogo' src={logoLogout} alt='logo'/></a>
          <Link to='/' className='nav-link mb-4 ml-4 text-primary btn btn-outline-primary bg-white btn-sm' onClick={this.props.signoutUser}> Log Out</Link>
        </nav>
      
      ) : (

      <nav className='navbar mr-3' id='navBar'> 
        <a href='/bookmarks' className='navbar-brand mt-4'><img id='loginLogo' src={logo} alt='logo'/></a>
        <Link to='/signin' className='nav-link mt-4 text-primary btn btn-primary bg-white landing-nav btn-lg' > Log In </Link>
        <Link to='/signup' className='nav-link mt-4 ml-3 text-white btn bg-primary btn-lg' landing-nav> Sign Up</Link>
      </nav> 

      )
    )
  }
  
}

export default NavBar;


// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <img src={logo} />
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="nav navbar-nav ml-auto">
//       <li class="nav-item active">v
//         <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="/">Disabled</a>
//       </li>
//     </ul>
//     </div>
//   </nav>