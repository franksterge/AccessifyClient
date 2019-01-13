import React, { Component } from 'react';

export default class AllVideos extends Component {

    constructor() {
        super();
        this.state = {
            videos: null
        }
    }

    componentDidMount() {
        let url = `http://10.19.140.202:3000/getallvideos`;
        fetch(url).then((data) => {
            return data.json();
        }).then((response) => {
            this.setState({
                videos: response
            });
        });
    }

    render() {
        console.log(this.state.videos);
        return (
            <div>
                <h1>All Videos</h1>
                <div>
                    {this.state.videos && this.state.videos.map((video) => {
                        return <p onClick={() => {
                            this.props.set(video);
                        }}>{video}</p>
                    }) }
                    <img src="http://localhost:3000/public/walking.png"></img>
                </div>
            </div>
        );
    }


}