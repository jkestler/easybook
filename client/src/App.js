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

  
  componentDidUpdate = () => {
    // localStorage.setItem('localUser', JSON.stringify(user));
    // localStorage.setItem('loggedIn', this.state.loggedIn);
    // JSON.parse(localStorage.getItem('loggedIn'));
    // localStorage.setItem('loggedIn', this.state.loggedIn);
    // localStorage.setItem('email', this.state.email);
    // localStorage.setItem('id', this.state.id);
  }
  
  componentDidMount = () => {
    this.setState({
      loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
    // localStorage.getItem('loggedIn');
    // localStorage.getItem('email');
    // localStorage.getItem('id');
    // const loginItem = lovcalStorage.getItem('loggedIn'); 
    // this.setState({ loggedIn: loginItem });
  }




  // componentDidMount = () => {
    
  // }

  updateUser = (userObject) => {
    this.setState(userObject);
    localStorage.setItem('loggedIn', true);
    // if (this.state.loggedIn) {
    //   localStorage.setItem('loggedIn', true);
    // }

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