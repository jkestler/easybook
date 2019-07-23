import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Bootstrap from 'bootstrap';
// import axios from 'axios'; 

import logo from '../assets/img/easybook_logo3.png';

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
  
  // toggle = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

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
    // const loggedIn = this.props.loggedIn ;
    // console.log(this.props);
    return (

      this.props.loggedIn ? (
 
        <nav className='navbar mr-3' id='navBar'>
          <a href='/' className='navbar-brand mt-4'><img id='logoImg' src={logo} alt='logo'/></a>
          <Link to='/' className='nav-link mt-1 ml-3 text-primary btn btn-outline-primary bg-white' onClick={this.props.signoutUser}> Log Out</Link>
        </nav>
      
      ) : (

      <nav className='navbar mr-3' id='navBar'> 
        <a href='/' className='navbar-brand mt-4'><img id='logoImg' src={logo} alt='logo'/></a>
        <Link to='/signin' className='nav-link mt-4 text-white btn btn-primary landing-nav' > Log In </Link>
        <Link to='/signup' className='nav-link mt-4 ml-3 text-primary btn btn-outline-info bg-white' landing-nav> Sign Up</Link>
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