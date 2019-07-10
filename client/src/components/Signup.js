import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom' 
import { Alert, FormGroup, Form, Label, Input, Button, Container } from 'reactstrap';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      redirectTo: null
    };
    
  }

  handleSubmit = (e) => {
    const { email, password, passwordConfirmation } = this.state;
    e.preventDefault();
    axios
      .post('/user', {
          email: email,
          password: password
      })
      .then(res => {
          console.log(res);
          if(!res.data.errmsg) {
            console.log('Registration Successful.')
            // RedirectTo('/');
          } else {
            console.log(res.data.errmsg);
            console.log('There was a problem with registration.');
          }
      })
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
  

  // set state equal to value of corresponding form property

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup> 
            <h1>SignUp Form</h1>
            <Label for="email">E-mail:</Label>
            <Input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
            <Label for='password'>Password: </Label>
            <Input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
            <Label for='passwordConfirmation'>Confirm Password: </Label>
            <Input type='password' name='passwordConfirmation' onChange={this.handleChange} />
            <Button onClick={this.handcleSubmit}>Sign Up!</Button>
          </FormGroup>
        </Form>  
      </Container>
      
      
    )
  }

  



}

export default SignupForm;