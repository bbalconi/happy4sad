import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';
import SongCard from '../SongCard/SongCard.js'

export default class Jumbo extends Component{
  constructor(){
    super()
  }
  render(){
    let songArr = [];
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    let shuffledArray = shuffle(this.props.tracks.tracks.items);
    for (let i = 0; i < 3; i++){
    let randomDigit = Math.floor(Math.random() * 19)
      songArr.push(<SongCard getSpotify={this.props.getSpotify} className='card' key={i} track = {shuffledArray[i]} />)
    } 

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
