import React, { Component } from 'react';
import './App.css';
import { VideoPlayer } from './VideoPlayer';
import { CommentBlock } from './CommentBlock';
import AllVideos from './AllVideos';
import ComposeComment from './ComposeComment';
import { Row, Col } from 'reactstrap';

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
						<Row>
							<Col sm="8">
								<VideoPlayer name={this.state.videoName}>
								</VideoPlayer>
							</Col>
							<CommentBlock name={this.state.videoName}></CommentBlock>
							<Col sm="4">
								<ComposeComment></ComposeComment>
							</Col>
						</Row>
					</div>
				}
			</div>
		);
	}
}

export default App;
