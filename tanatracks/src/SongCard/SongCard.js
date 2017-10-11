import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './SongCard.css';

export default class SongCard extends Component{
  constructor(){
    super()
    this.songLike = this.songLike.bind(this);
    this.state = {
      likes: 0,
  }
  }

  songLike(e){
    this.setState({
      likes: this.state.likes + 1
  });
  fetch('/likes/' + this.props.track.id, {
    method: 'POST'
  });
  }

  render(){
    let yoMark = this.props.track
    console.log(yoMark);
    let source = 'https://open.spotify.com/embed?uri=' + yoMark.uri
    console.log(source);
  return ( 
    <div>
    <Card id='song-card'>
      <CardBody>
        <CardTitle id='card-title'>{yoMark.name}</CardTitle>
        <CardSubtitle className='sub-title'>By: {yoMark.artists['0'].name}</CardSubtitle>
        <iframe className='frame' src={source} width="80" height="100" frameborder="0" allowtransparency="true"></iframe>
        <Button onClick={this.songLike}>Liked: {this.state.likes} times!</Button>
      </CardBody>
    </Card>
    </div>
  );
};
}
