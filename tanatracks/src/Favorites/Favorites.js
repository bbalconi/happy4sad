import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import JumboFavorites from '../JumboFavorites/JumboFavorites';
import OurNav from '../OurNav/OurNav';

export default class Favorites extends Component{
  constructor(){
    super()
  }
  render(){
    
    return (
    <div>
      <OurNav />
      <JumboFavorites tracks={this.props.tracks} getSpotify={this.props.getSpotify}/>
    </div>
    );
  };
}