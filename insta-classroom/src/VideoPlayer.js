import React, {Component} from 'react';

export class VideoPlayer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <React.Fragment>
                <video id="video-player" style={{width: '100%'}}controls>
                    <source src={"https://accessify.herokuapp.com/video?name=" + this.props.name} type="video/mp4"></source>
                </video>
            </React.Fragment>
        );

    }
}