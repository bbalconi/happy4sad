import React, { Component } from 'react';
import Jumbo from '../Jumbotron/Jumbotron.js';
import OurNav from '../OurNav/OurNav.js';
import { Jumbotron, Button } from 'reactstrap';

export default class HomePage extends Component{
  constructor(){
    super()
  }
  render(){
    console.log(this.props);
    
    return (
    <div>
      
      <Jumbo username={this.props.username} tracks={this.props.tracks} getSpotify={this.props.getSpotify}/>
    </div>
    );
  };
}