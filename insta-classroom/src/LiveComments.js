import React, {Component} from 'react';
import firebase from 'firebase/app';

export default class LiveComments extends Component {
    constructor() {
        super();
        this.state = {
            comments: {},
            timer: null
        }
    }

    componentDidMount = () => {
        let video = document.getElementById("video-player");
        let name = this.props.name.replace(".mp4", "");

        var ref = firebase.database().ref(name);
        // ref.once("value")
        //   .then((snapshot) => {
        //     console.log(snapshot.val());

        //     setInterval(() => {
        //         let time = Math.round(video.currentTime);
        //         // console.log(time);
        //         // console.log(snapshot.val()[time]);
        //             if(snapshot.val() !== null && snapshot.val()[time] != null) {
        //                 console.log(snapshot.val()[time]);
        //                 if(this.state.comments[time] == null) {
        //                     let curr = this.state.comments;
        //                     curr[time] = snapshot.val()[time];
        //                     this.setState(curr);
        //                     console.log(this.state.comments);
        //                 }
        //                 for(let i = 0; i < time; i++) {
                            
        //                 }
        //             }
        //     }, 1000);
        //   });

          setInterval(() => {
            ref.once("value")
            .then((snapshot) => {
              console.log(snapshot.val());
              if(snapshot.val()) {
                  let curr = {};
                  for(let i = 0; i < video.currentTime; i++) {
                      if(snapshot.val()[i] != null) {
                        curr[i] = snapshot.val()[i];
                      }
                  }
                  this.setState({comments: curr});
              }
            })
          }, 1000);

    }



    render() {
        return (
            <div>
                {Object.keys(this.state.comments).map(el => {
                    return <p>{"> " + el + " : " + this.state.comments[el]}</p>
                })}
            </div>
        );
    }
}