import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';
import Landing from './components/Landing.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> 
            <Route exact path='/' component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
 
export default App;