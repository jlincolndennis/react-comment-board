import React, { Component } from 'react';
import Comment from './comment'

class CommentBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        'This is a comment',
        'This is also a comment',
        'Lincoln is so sexy',
        'Who wrote that??'
      ]
    }
  }

  render() {
    const commentsArr = this.state.comments.map((comment, index) =>{
      return (
        <Comment key={index}>{comment}</Comment>
      )
    })

    return (
      <div className='comment-board'>
        {commentsArr}
      </div>
    )
  }
}

export default CommentBoard
