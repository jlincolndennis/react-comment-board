import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/comment';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <Comment>This is a comment! Woo!</Comment>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('.container'))
