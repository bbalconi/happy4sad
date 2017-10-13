import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './FavCard.css';

export default class FavCard extends Component{
  render(){
    console.log(this.props)
  return ( 
    <div>
    <Card id='song-card'>
      <CardBody id='card-size'>
        <CardTitle id='card-title'>{this.props.songArr[0].likeCount}</CardTitle>
      </CardBody>
    </Card>
    </div>
  );
};
}
