import React, { Component } from 'react';
import Comment from './comment'

class CommentBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }
  addComment(newComment) {
    let comments = this.state.comments;
    comments.push(newComment);
    this.setState({comments: comments})
  }

  removeComment(index) {
    let comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({comments: comments})
  }

  saveComment(newText, index) {
    let comments = this.state.comments;
    comments[index] = newText;
    this.setState({comments: comments})
  }

  render() {
    const commentsArr = this.state.comments.map((comment, index) => {
      return (
        <Comment
          key={index}
          index={index}
          updateComment={this.saveComment.bind(this)}
          deleteComment={this.removeComment.bind(this)}
          >
          {comment}
        </Comment>
      )
    })

    return (
      <div className='comment-board'>
        <button
          className="btn btn-default btn-info"
          onClick={this.addComment.bind(this, 'New Message')}
        >
          Add New Message
        </button>
        {commentsArr}
      </div>
    )
  }
}

export default CommentBoard
