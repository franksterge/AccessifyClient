import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VideoPlayer } from './VideoPlayer';
import { CommentBlock } from './CommentBlock';
import ComposeComment from './ComposeComment';
import {Row, Col} from 'reactstrap';
import LiveComments from './LiveComments';
import firebase from 'firebase/app';


class App extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col sm="8">
          <VideoPlayer name="stuartreges.mp4">
          </VideoPlayer>
          <CommentBlock name="stuartreges.mp4"></CommentBlock>
        </Col>
        <Col sm="4">
          <LiveComments></LiveComments>
          <ComposeComment></ComposeComment>
        </Col>
      </Row>
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
