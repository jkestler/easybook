import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Alert, FormGroup, Form, Label, Input, Button, Container } from 'reactstrap';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: '',
      redirectTo: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    axios.post('/user/signin', {
      email: email,
      password: password
    })
    .then((res) => {
      console.log('RESPONSE:', res);
      if (res.status === 200) {
        this.props.updateUser({
          loggedIn: true,
          email: res.data.username,
          id:  res.data.id
        }) 
        this.setState({ redirectTo: '/' })
      }
    })
    .catch((err) => {
      console.log('LOGIN ERROR: ', err);
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} /> 
    } 

    return (
      <Container> 
        <Form onSubmit={this.handleSubmit} >
          <FormGroup> 
            <h1> Log In </h1>
            <Label for="email">E-mail: </Label>
            <Input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
            <Label for='password'>Password:</Label> 
            <Input type='password' name='password' value={this.state.password} onChange={this.handleChange} /> 
            <Button onClick={this.handleSubmit}> Sign In</Button>
          </FormGroup>
        </Form>
      </Container> 
            
    )
  }

}

export default LoginForm;