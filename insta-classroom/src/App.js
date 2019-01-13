import React, { Component } from 'react';
import './App.css';
import { VideoPlayer } from './VideoPlayer';
import { CommentBlock } from './CommentBlock';
import AllVideos from './AllVideos';

class App extends Component {

	constructor() {
		super();
		this.state = {
			videoName: null
		}
	}

	setVideoName = (name) => {
		this.setState({
			videoName: name 
		});
	}

	reset = () => {
		console.log("here")
		this.setState({
			videoName: null
		})
	}

	render() {
		return (
			<div>
				{!this.state.videoName ?
					<div>
						<AllVideos set={this.setVideoName}></AllVideos>
					</div>
					:
					<div>
						<button onClick={() => this.reset()}>Back</button>
						<VideoPlayer name={this.state.videoName}>
						</VideoPlayer>
						<CommentBlock name={this.state.videoName}></CommentBlock>
					</div>
				}
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
