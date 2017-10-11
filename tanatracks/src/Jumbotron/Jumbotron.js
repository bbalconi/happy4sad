import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';
import SongCard from '../SongCard/SongCard.js'

export default class Jumbo extends Component{
  constructor(){
    super()
  }
  render(){
    let songArr = this.props.tracks.tracks.items.slice(1,4).map((track, i)=>{
     return <SongCard className='card' key={i} track = {track} />
    }); 
    return (
    
    <div>
      <Jumbotron id='jumbo' >
        <h1 className="display-3">Montana Songs</h1>
        <p> 
          {songArr}
        </p>
        
      </Jumbotron>
    </div>
  );
};
}
