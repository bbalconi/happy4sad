import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './SongCard.css';
import LikeButton from '../../LikeButton/LikeButton.js';

export default class SongCard extends Component{
  render(){
    let yoMark = this.props.track
    let source = 'https://open.spotify.com/embed?uri=' + yoMark.uri

  return ( 
    <div>
    <Card id='song-card'>
      <CardBody id='card-size'>
        <CardTitle id='card-title'>{yoMark.name}</CardTitle>
        <CardSubtitle className='sub-title'>By: {yoMark.artists['0'].name}</CardSubtitle>
        <div className='workkkplz'>
          <iframe className='frame' src={source} width="80" height="100" frameBorder="0" ></iframe>
          <LikeButton className='like-button' yoMark={this.props.track} username = {this.props.username} songLike = {this.songLike}/>
        </div>
      </CardBody>
    </Card>
    </div>
  );
};
}
