import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom' 
import { FormGroup, Form, Label, Input, Button, Container } from 'reactstrap';
import { Alert } from 'reactstrap';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      redirectTo: null,
      err: null
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
        this.setState({err: err.response.data.errors});
      })

  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
  
  clearErr = () => {
    this.setState({ err: null})
  }
  // set state equal to value of corresponding form property 

  render() {
    if (this.state.redirectTo) { 
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    // const error = this.state.err;
    // if (this.state.err) {

    // if (this.state.err) {

    // }
    return (
      
      <div className='container-fluid'> 


        {/* </div> */}
        <div id='signupForm' className='row justify-content-center align-items-center h-100'>
          <div className='col col-sm-6 col-md-6 col-lg-4 col-xl-3'>
            <h1 id='loginHeaders'>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'> 
                <input placeholder='Please enter a valid email' type='email' className='form-control form-control-lg' name='email' value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className='form-group'> 
                <input placeholder='Enter password'type='password' className='form-control form-control-lg' name='password' value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className='form-group'> 
                <input placeholder= 'Confirm Password' type='password' className='form-control form-control-lg' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.handleChange} />
              </div>
              <button type='submit' className='btn btn-info btn-lg btn-block' onClick={this.handleSubmit}>Sign Up!</button>
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
                  <strong> {err.msg}</strong> 
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

export default SignupForm;