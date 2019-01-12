import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VideoPlayer } from './VideoPlayer';
import { CommentBlock } from './CommentBlock';

class App extends Component {
  render() {
    return (
      <div>
      <VideoPlayer name="walking.mp4">
      </VideoPlayer>
      <CommentBlock name="walking.mp4"></CommentBlock>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
