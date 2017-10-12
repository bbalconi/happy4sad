import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './LikeButton.css';

export default class LikeButton extends Component{
  constructor(){
    super()
    console.log('LikeButton');
    this.state = {likeCount: 0};
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
    this.songLike = this.songLike.bind(this);
  }

  songLike(e){
    fetch('/likes/' + this.props.yoMark.id, {
      method: 'POST',
      // headers: {'Content-Type': 'application/json'},
      // body: {username: }
    })
  }

  incrementLikeCount(){
    this.songLike();
    let likeCount = this.state.likeCount + 1;
    this.setState({likeCount: likeCount});
    console.log(this.state.likeCount);
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
