import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './SongCard.css';

export default class SongCard extends Component{
  constructor(){
    super()
  }
  render(){
  let fuckr = this.props.tracks.tracks;
  console.log(fuckr.items["0"].album.images["0"]);
  
  return (
    <div>
    <Card id='song-card'>
      <CardBody>
        <CardImg src={fuckr.items["3"].album.images["0"].url} id='size'/>
        <CardTitle id='card-title'>{fuckr.items['3'].name}</CardTitle>
        <CardSubtitle>{fuckr.items['3'].artists['0'].name}</CardSubtitle>
      </CardBody>
    </Card>
    </div>
  );
};
}
