import React, { Component } from 'react';
import Jumbo from '../Jumbotron/Jumbotron.js';
import OurNav from '../OurNav/OurNav.js';
import { Jumbotron, Button } from 'reactstrap';

export default class HomePage extends Component{
  constructor(){
    super()
  }
  render(){
    return (
    <div>
      <OurNav />
      <Jumbo tracks={this.props.tracks}/>
    </div>
    );
  };
}