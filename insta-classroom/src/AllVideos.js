import React, { Component } from 'react';
import { CardImg, Card, CardBody, Button, Row, Col } from 'reactstrap';

export default class AllVideos extends Component {

    constructor() {
        super();
        this.state = {
            videos: null
        }
    }

    componentDidMount() {
        let url = `https://accessify.herokuapp.com/getallvideos`;
        fetch(url).then((data) => {
            return data.json();
        }).then((response) => {
            this.setState({
                videos: response
            });
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ margin: '1rem' }} className="text-center">All Videos</h1>
                <Row>
                    {this.state.videos ? this.state.videos.map((video) => {
                        return (
                            <Col sm="6" key={video}>
                                <Card style={{ margin: '1rem' }} onClick={() => {
                                    this.props.set(video);
                                }} >
                                    <CardBody>
                                        <CardImg top width="100%" alt={video} src={`https://accessify.herokuapp.com/image?name=${video}.png`}></CardImg>
                                        <div className="text-center m-3">
                                            <h5>{(video.substring(0,1)).toUpperCase() + (video.replace(".mp4", "")).substring(1)}</h5>
                                            <Button onClick={() => this.setState({ videoName: video })}>View</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })
                    :
                    <div>Server starting up!</div>
                    } 
                </Row>
            </div>
        );
    }


}