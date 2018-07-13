import React, { Component } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
// import PropTypes from 'prop-types';

class SignUp extends Component {
  state = {
    inputName: '',
    inputPassword: ''
  }

  inputNameChange = e => {
    this.setState({
      inputName: e.target.value
    });
  };

  inputInputPassword = e => {
    this.setState({
      inputPassword: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.inputName,
      password: this.state.inputPassword
    };
    const reqBody = {
      method: 'POST',
      body: JSON.stringify(data)
    }
    await fetch('http://localhost:4000/signup', reqBody);
  }

  render() {
    return (
      <form className="signup" id='signup' onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          type="text"
          value={this.state.inputName}
          placeholder='name'
          changeHandler={this.inputNameChange}
          isRequired='true'
        />
        <Input
          type="text"
          value={this.state.inputPassword}
          placeholder='password'
          changeHandler={this.inputInputPassword}
          isRequired='true'
        />
        <Button className="add" text='sign up' type='submit'/>
      </form>
    );
  }
}

export default SignUp;