import React, { Component } from 'react';
import { Jumbotron, Button, InputGroupButton, Input, InputGroup } from 'reactstrap';
import './Login.css';
import OurNav from '../OurNav/OurNav.js'

export default class Login extends Component{
  constructor(){
    super()
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      username: "",
      password: ""
    }
  }
  
    handleUsername(a){
      this.setState({
        username: a.target.value
      });
    }

    handlePassword(a){
      this.setState({
        password: a.target.value
      });
    }
  


  getData(){
    console.log(this.state.username);
    fetch('/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username, 
        password: this.state.password,
      })
    });
  };

  render(){
 
    return (
    <div>
      <OurNav />
      <Jumbotron id='login' >
      <h1 className="display-3">Montana Songs</h1>
      <InputGroup id='input-field'>
        <div className='fucss'>
          <Input value={this.state.username} onChange={this.handleUsername} className='inputer' placeholder="Enter username..."/>
          <Input value={this.state.password} onChange={this.handlePassword} className='inputer' placeholder="Enter password..."/>
          <InputGroupButton><Button onClick={this.getData}>Login</Button></InputGroupButton>
        </div>
      </InputGroup>
      </Jumbotron >
    </div>
    );
  };
}