import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
      super(props);

      this.state = {
        editing: false
      };
  }

  edit() {
    this.setState({editing: true})
  }
  save() {
    let val = this.refs.newText.value
    console.log('new comment', val);
    this.setState({editing: false})
  }

  remove() {
    console.log("Removed comment");
  }

  renderComment() {
    return (
      <div className="comment-box">
        <p className="comment-text">{this.props.children}</p>
        <button
          className="btn btn-default btn-primary"
          onClick={this.edit.bind(this)}>
          Edit
        </button>
        <button
          className="btn btn-default btn-danger"
          onClick={this.remove}>
          Remove
        </button>
      </div>
    )
  }

  renderForm() {
    return (
      <div className="comment-box">
        <textarea
          className="comment-textarea"
          ref="newText"
          defaultValue={this.props.children}></textarea>
        <button
          className="btn btn-default btn-success"
          onClick={this.save.bind(this)}>
          Save
        </button>
        <button
          className="btn btn-default btn-danger"
          onClick={this.remove}>
          Remove
        </button>
      </div>
    )
  }

  render() {
    if (this.state.editing) {
      return this.renderForm()
    }

    return this.renderComment()
  }
}

export default Comment
