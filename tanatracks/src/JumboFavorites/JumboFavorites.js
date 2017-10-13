import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SongCard from '../Tracks/SongCard/SongCard.js';
import OurNav from '../OurNav/OurNav';
import FavCard from '../FavCard/FavCard';

export default class JumboFavorites extends Component{
  constructor(props){
    super(props)
    this.user;
    this.testFunction = this.testFunction.bind(this)
    this.state = {
      loaded: false
    }
  }

  testFunction(){
    if (this.state.loaded) {
      this.setState({
        loaded: false
      });
    }
  fetch('/favSong')
    .then((res)=>{
      return res.json();
    }).then((user)=>{
      this.user = user;
      this.setState({
        loaded: true,
      });
      //console.log(this.user);      
     })
    };
  
  
  componentDidMount(){
    this.testFunction();
  }


  render(){
   
  if (this.state.loaded) {
    let arr = [];
    let songArr = this.user[0].song
     for (let i = 0; i < songArr.length; i++){
       arr.push(<FavCard songArr={this.user[0].song} />)
      }
      console.log(arr)
  return (
    <div>
      <Jumbotron id='jumbo' >
      <Button onClick={this.testFunction}>ARRRGH</Button>
      <OurNav />
        <h1 className="display-3">Montana Songs</h1>
        {arr}
        
      </Jumbotron>
    </div>
  )
} else {
    return (
      <h2>
        Loading...
      </h2>
    );
  }}
};
