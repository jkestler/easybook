import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import Signup from './components/Signup.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> 
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
 
export default App; 