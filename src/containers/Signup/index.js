import React, { Component } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

class Signup extends Component {
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

  readURL = () => {
    const input = document.getElementById('imgInp')
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        document.getElementById('preview').setAttribute('src', e.target.result);
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }

  render() {
    return (
      <form className="auth-form" id='signup' onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          type="text"
          value={this.state.inputName}
          placeholder='name'
          changeHandler={this.inputNameChange}
          isRequired='true'
        />
        <Input
          type="password"
          value={this.state.inputPassword}
          placeholder='password'
          changeHandler={this.inputInputPassword}
          isRequired='true'
        />
        <div className="profile-photo">
        <Input type="file" id="imgInp" accept="image/*" changeHandler={this.readURL} />
        <img id="preview" src="#" alt="your_image" />
        </div>
        <Button className="add" text='sign up' type='submit'/>
        <Link to='/login'>Login</Link>
      </form>
    );
  }
}

export default Signup;