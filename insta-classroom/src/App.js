import React, { Component } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { CommentBlock } from './CommentBlock';
import AllVideos from './AllVideos';
import ComposeComment from './ComposeComment';
import { Row, Col, Button } from 'reactstrap';
import Header from './Header';

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
		this.setState({
			videoName: null
		})
	}

	render() {
		return (
			<div>
				<Header></Header>
				{!this.state.videoName ?
					<div>
						<AllVideos set={this.setVideoName}></AllVideos>
					</div>
					:
					<div>
						<Button style={{ margin: '1rem' }} onClick={() => this.reset()}>Back</Button>
						<Row>
							<Col sm="8">
								<VideoPlayer name={this.state.videoName}>
								</VideoPlayer>
								<CommentBlock name={this.state.videoName}></CommentBlock>
							</Col>
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
