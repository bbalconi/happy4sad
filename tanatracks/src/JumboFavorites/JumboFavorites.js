import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import SongCard from '../SongCard/SongCard.js';
import OurNav from '../OurNav/OurNav';

export default class JumboFavorites extends Component{
  constructor(){
    super()
  }
  render(){
    let songArr = []
    function sort(array){
      array.sort((a,b)=>{
       return (b.likeCount) - (a.likeCount);
      })
      return array;
    }  
    let sortedArray = sort(this.props.tracks.tracks.items);
    console.log(sortedArray);
    for (let i = 0; i < 3; i++){
      songArr.push(<SongCard getSpotify={this.props.getSpotify} className='card' key={i} track = {sortedArray[i]} />)
      }
  return (
    <div>
      <Jumbotron id='jumbo' >
      <OurNav />
        <h1 className="display-3">Montana Songs</h1>
        <p> 
          {songArr}
        </p>
        
      </Jumbotron>
    </div>
  );
};
}