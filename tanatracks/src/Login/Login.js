import React, { Component } from 'react';
import { Jumbotron, Button, InputGroupButton, Input, InputGroup } from 'reactstrap';
import './Login.css';
import { withRouter } from 'react-router-dom';
import OurNav from '../OurNav/OurNav.js'

class Login extends Component{
  constructor(props){
    super(props)
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logIn = this.logIn.bind(this);
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
  
    logIn(){
      this.props.getData({
        username: this.state.username,
        password: this.state.password
      });
      this.props.history.push('/')
    }



  render(){
    return (
    <div>
      
      <Jumbotron id='login' >
      <OurNav />
      <h1 className="display-3">Montana Songs</h1>
      <InputGroup id='input-field'>
        <div className='fucss'>
          <Input value={this.state.username} onChange={this.handleUsername} className='inputer' placeholder="Enter username..."/>
          <Input value={this.state.password} onChange={this.handlePassword} className='inputer' placeholder="Enter password..."/>
          <InputGroupButton><Button onClick={this.logIn}>Login</Button></InputGroupButton>
        </div>
      </InputGroup>
      </Jumbotron >
    </div>
    );
  };
}

export default withRouter(Login)