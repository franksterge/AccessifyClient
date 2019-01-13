import React, { Component } from 'react';

export class CommentBlock extends Component {

    constructor() {
        super();
        this.state = {
            timestamp: [],
            transcription: {},
            time: null,
            playInterval: null,
        }
    }

    componentDidMount() {
        let url = `https://accessify.herokuapp.com/transcript?name=${this.props.name}`;
        fetch(url).then((data) => {
            return data.json();
        }).then((response) => {
            this.setState({
                transcription: response
            });
        });
        let video = document.getElementById("video-player");
        video.addEventListener("playing", (ev) => {
            setInterval(() => {
                let time = Math.round(video.currentTime);
                if (!this.state.timestamp.includes(time)) {
                    this.setState({
                        timestamp: this.state.timestamp.concat(time)
                    });
                }

            }, 1000);
        });
        video.addEventListener("pause", () => {
            clearInterval(this.state.playInterval);
            this.setState({
                playInterval: null
            })
        })

    }

    roundHalf = (num) => {
        return Math.round(num * 2) / 2;
    }

    render() {
        return (
            <section style={{ margin: '1rem' }}>
                <h4>Transcription</h4>
                <div id="transcription">
                    {this.state.timestamp.length > 0 && this.state.timestamp.map((timestamp) => {
                        return <p><span>> :{timestamp}</span> {this.state.transcription[timestamp] && this.state.transcription[timestamp] }</p>
                    })}
                </div>
            </section>
        );


    }
}
