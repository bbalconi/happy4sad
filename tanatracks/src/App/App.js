import React, { Component } from 'react';
import './App.css';
import OurNav from '../OurNav/OurNav.js';
import Login from '../Login/Login.js';
import HomePage from '../HomePage/HomePage.js';
import SignUp from '../SignUp/SignUp.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {
      initialized: false,
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

componentDidMount(){
  this.getSpotify();
}

  render() {
    if(this.state.initialized){
    return (
        <Router>
        <div>
          <Route exact path="/" render={() => <HomePage tracks={this.tracks}/>} />
          <Route path="/Login" render={() => <Login />}/>
          <Route path="/SignUp" render={() => <SignUp />}/>
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
