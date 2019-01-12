import React, {Component} from 'react';

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
        let url = `http://10.19.140.202:3000/timestamp?name=${this.props.name}`;
                fetch(url).then((data) => {
                    return data.json();
                }).then((response) => {
                    this.setState({
                        transcription: response
                    });
                });
        let video = document.getElementById("video-player");
        // video.addEventListener("play", (ev) => {
        //     this.setState({
        //     });
        // });
        // video.ontimeupdate = function() {
        //     clearInterval(this.state.playInterval);
        //     let started = setInterval(() => {
        //         let time = Math.round(video.currentTime);
        //         if (!this.state.timestamp.includes(this.state.transcription[time])) {
        //             this.setState({
        //                 timestamp: this.state.timestamp.concat(this.state.transcription[time])
        //             });
        //         }
        //     },1000);
        // };
        video.addEventListener("playing", (ev)=> {
            let started = setInterval(() => {
                let time = Math.round(video.currentTime); 
                if (!this.state.timestamp.includes(this.state.transcription[time])) {
                    this.setState({
                        timestamp: this.state.timestamp.concat(this.state.transcription[time])
                    });
                }
                
            }, 1000);
            
            this.getTimeStamp();
        });
        video.addEventListener("pause", () => {
            clearInterval(this.state.playInterval);
            this.setState({
                playInterval: null
            })
        })

    }

    roundHalf = (num)=> {
        return Math.round(num * 2) / 2;
    }

    getTimeStamp = ()=> {
        console.log("playing")
        console.log(this.state.time)
        // let time = this.roundHalf(video.currentTime);
        // let url = `http://10.19.140.202:3000/timestamp?time=${time}`;
        // fetch(url).then((data) => {
        //     return data.json();
        // }).then((response) => {
        //     this.setState({
        //         timestamp: this.state.timestamp.concat(response.message)
        //     });
        // });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.timestamp.length > 0 && this.state.timestamp.map((timestamp) => {
                    return <p>{timestamp}</p>
                })}
                <div>
                    <h2></h2>
                </div>                
            </React.Fragment>
        );

        
    }
}
