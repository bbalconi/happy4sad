import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import JumboFavorites from '../JumboFavorites/JumboFavorites';


export default class Favorites extends Component{
  constructor(){
    super()
  }
  render(){
    
    
    return (
    <div>
      
      <JumboFavorites tracks={this.props.tracks} getSpotify={this.props.getSpotify}/>
    </div>
    );
  };
}