import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import Customers from './components/customers/customers';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import SignupForm from './components/Signup.js';
import LoginForm from './components/Login.js';
import Bookmarks from './components/Bookmarks.js';
// import { Redirect } from 'react-router-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
      id: null,
      toggle: false
    }

  }


  componentDidUpdate = () => {
  }
  
  componentDidMount = () => {
    this.setState({
      loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
    })
  
  }




  // componentDidMount = () => {
    
  // }

  updateUser = (userObject) => {
    this.setState(userObject);
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('id', this.state.id);
  }

  signOut = () => {
    axios.get('/user/signout')
      .then(res => { 
        if (!res.data.user) {
          console.log('User Logged Out');
          console.log(res.data);
          this.updateUser({loggedIn: false, email: null, id: null });
          localStorage.clear();
        }
     })
  }


  toggleClass = () => {
    this.state.toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true})
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <div className="App">
          <NavBar loggedIn={this.state.loggedIn} toggleClass={() => this.toggleClass()} signoutUser={() => this.signOut()}  />
          <Switch> 
            <Route exact path='/' component={Landing} />
            <Route 
              path='/signin'
              render={() =>
                <LoginForm
                  updateUser={this.updateUser}
              />}
            /> 
            <Route 
              path='/signup'
              render={() =>
                <SignupForm 
                  updateUser={this.updateUser} 
              />}
            />  
            <Route 
              exact path='/bookmarks' 
              render={() => 
                <Bookmarks
                  toggle={this.state.toggle}
                />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App; 