import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import Customers from './components/customers/customers';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import SignupForm from './components/Signup.js';
import LoginForm from './components/Login.js';
import Bookmarks from './components/Bookmarks.js';
import { Redirect } from 'react-router-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
      id: null,
    }

  }

  componentDidMount = () => {

  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }

  signOut = () => {
    axios.get('/user/signout')
      .then(res => {
        // this.updateUser({loggedIn: false, email: null, id: null })
        console.log('RESPONSE: ', res);
        if (!res.data.user) {
          this.setState({
            loggedIn: false,
            email: null,
            id: null
          })
        }
      })
    }
    // axios.get('/user/signout')
    //   .then(res => {
    //     if (!res.data.user) {
    //       this.setState({
    //         loggedIn: false,
    //         email: null,
    //         id: null
    //       });
          
    //     } else {
    //       console.log('Could not sign out user...');
    //     }
    //   }
    // )
    // this.setState({
    //   loggedIn: false,
    //   email: null,
    //   id: null
    // })
  // getUser = () => {
  //   axios.get('/user/signin/')
  //     .then(res => {
  //       console.log('Get user respon dse: ', res.data);
  //       if(res.data.user) {
  //         console.log('Get User: There is a user saved in the server session: ');

  //         this.setState({
  //           loggedIn: true,
  //           email: res.data.user.username,
  //           id: res.data.user.id
  //         })
  //       } else {
  //         console.log('Get user: no user');
  //         this.setState({
  //           loggedIn: false,
  //           email: null
  //         });
  //       }
  //     })
  //   }




  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar loggedIn={this.state.loggedIn} signoutUser={() => this.signOut()}  />
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
            {/* <Route 
              path='/bookmarks' 
              component={Bookmarks} 
            /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App; 