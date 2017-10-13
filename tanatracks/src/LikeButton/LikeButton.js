import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './LikeButton.css';

export default class LikeButton extends Component{
  constructor(){
    super()
    this.state = {likeCount: 0};
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
    this.songLike = this.songLike.bind(this);
  }

  songLike(){
    console.log(this.props.username[0]);
    fetch('/likes/' + this.props.yoMark.id, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.props.username
    }),
  })
};

  incrementLikeCount(){
    console.log(this.props.username);
    this.songLike();
    let likeCount = this.state.likeCount + 1;
    this.setState({likeCount: likeCount});
  }

  componentDidMount(){
    let songCount = 0
    if (this.props.yoMark.likeCount) {
    songCount = this.props.yoMark.likeCount
    }
    this.setState({likeCount: songCount});
    } 
  

  render(){
    return (
    <div className='like-btn'>
      <Button onClick={this.incrementLikeCount}>Liked: {this.state.likeCount} times!</Button>
    </div>
    );
  };
}
