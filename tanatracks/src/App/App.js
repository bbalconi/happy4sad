import React, { Component } from 'react';
import './App.css';
import Jumbo from '../Jumbotron/Jumbotron.js';


class App extends Component {
  constructor(){
    super();
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

componentDidMount(){
  this.getSpotify();
}

  render() {
    if(this.state.initialized){
    return (
      <div >
        <Jumbo tracks={this.tracks}/>
      </div>
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
