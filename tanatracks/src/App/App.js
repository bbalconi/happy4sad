import React, { Component } from 'react';
import './App.css';
import OurNav from '../OurNav/OurNav.js';
import Login from '../Login/Login.js';
import HomePage from '../HomePage/HomePage.js';
import SignUp from '../SignUp/SignUp.js';
import Favorites from '../Favorites/Favorites.js';
import {
  BrowserRouter as Router,
  Route,
  Link, 
} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.getSpotify = this.getSpotify.bind(this);
    this.getData = this.getData.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.getData = this.getData.bind(this);
    this.user;
    this.state = {
      initialized: false
    }
  }

  getSpotify(){
    if (this.state.initialized) {
      this.setState({
        initialized: false
      });
    }
    fetch('/search').then((webObj)=>{
      return webObj.json();
    }).then((data)=>{
      this.tracks = data;
      this.setState({
        initialized: true,
      });
    })
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

  getData(b){
    fetch('/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: b.username, 
        password: b.password,
      }) 
    }).then((user)=>{
      return user.json();
    }).then((user)=>{
      this.user = user;
    });
  };

componentDidMount(){
  this.getSpotify();
}

  render() {
    if(this.state.initialized){
    return (
        <Router>
        <div>
          <Route exact path="/" render={() => <HomePage username = {this.user} getData = {this.getData} tracks={this.tracks} getSpotify={this.getSpotify}/>} />
          <Route path="/Login" render={() => <Login getData = {this.getData} getSpotify={this.getSpotify}  />}/>
          <Route path="/SignUp" render={() => <SignUp />}/>
          <Route path="/Favorites" render={() => <Favorites tracks={this.tracks} getSpotify={this.getSpotify}/>}/>
        </div>
        </Router>
    );
  } else {
    return (
      <h2>
        Loading...
      </h2>
    );
  }}
}

export default App;
