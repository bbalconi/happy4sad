import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';
import SongCard from '../SongCard/SongCard.js'

export default class Jumbo extends Component{
  constructor(){
    super()
  }
  render(){
    
    return (
    
    <div>
      <Jumbotron id='jumbo' >
        <h1 className="display-3">Montana Songs</h1>
        <p> 
          <br/><br/><br/><br/><SongCard tracks={this.props.tracks}/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </p>
        
      </Jumbotron>
    </div>
  );
};
}
