import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom' 
import { FormGroup, Form, Label, Input, Button, Container } from 'reactstrap';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      redirectTo: null
    };
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password  } = this.state;
    
    // signup user and log in 
    axios
      .post('/user', {
          email: email,
          password: password
      })
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          this.props.updateUser({
            loggedIn: true,
            email: res.data.username,
            id: res.data.id
          })
          this.setState({ redirectTo: '/bookmarks'})
        }
      })
      .catch((err) => {
        console.log('signup error:', err);
      })
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
  

  // set state equal to value of corresponding form property 

  render() {
    if (this.state.redirectTo) { 
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup> 
            <h1>Sign Up</h1>
            <Label for="email">E-mail:</Label>
            <Input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
            <Label for='password'>Password: </Label>
            <Input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
            <Label for='passwordConfirmation'>Confirm Password: </Label>
            <Input type='password' name='passwordConfirmation' onChange={this.handleChange} />
            <Button onClick={this.handleSubmit}>Sign Up!</Button>
          </FormGroup>
        </Form>  
      </Container>
      
      
    )
  }

  



}

export default SignupForm;