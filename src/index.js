import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/comment';
import CommentBoard from './components/comment_board';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <CommentBoard />
        
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('.container'))
