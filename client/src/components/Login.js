import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import { Alert, FormGroup, Form, Label, Input, Button, Container } from 'reactstrap';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: '',
      redirectTo: null,
      err: '',
      errMsg: ''
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
        this.setState({ redirectTo: '/bookmarks' })
      }
    })
    .catch((err) => {
      this.setState({ err: err.response.data.errors});
      console.log('LOGIN ERROR: ', err);
    })
  }

  clearErr = () => {
    this.setState({ err: null})
  }



  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} /> 
    } 
    

    return (
      <div className='container-fluid'>
        <div id='signupForm' className='row justify-content-center align-items-center h-100'>
          <div className='col col-sm-6 col-md-6 col-lg-4 col-xl-3'>
            <h1 id='loginHeaders'>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <input placeholder='Please enter a valid email' type='email' className='form-control form-control-lg'
                  name='email' value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <input placeholder='Enter password' type='password' className='form-control form-control-lg'
                  name='password' value={this.state.password} onChange={this.handleChange} />
              </div>
              <button type='submit' className='btn btn-primary btn-lg btn-block' onClick={this.handleSubmit}>Login </button>
            </form>
          </div>
        </div>
        <div id='sigupAlerts' className='row justify-content-center align-items-center h-10'>
          <div className='col col-sm-6 col-md-6 col-lg-4 col-xl-3'>

            {
            this.state.err ?
            this.state.err.map((err, id) => {
              return (
                <div key={id} className="alert alert-primary alert-dismissible fade show my-2" role="alert">
                  <strong> {err.msg} </strong>
                  <button onClick={this.clearErr} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              );
            })
            :
            ''
            }
          </div>
        </div>
      </div>
    )
  }

}

export default LoginForm;