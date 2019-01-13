import React, {Component} from 'react';
import {InputGroupAddon, Button, Input, InputGroup} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/database';


export default class ComposeComment extends Component {
    
    constructor() {
        super();
        this.state = {
            content: ""
        };
    }

    componentDidMount() {

    }

    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    sendComment = () => {

        let video = document.getElementById("video-player");
        let src = video.currentSrc;
        let index = src.indexOf("name=");
        src = src.substring(index + 5, src.length - 4);
        console.log(src);

        let time = Math.round(video.currentTime); 

        // firebase.database().ref(src).set({
        //     time: this.state.content
        // });
        this.postCaption(src, this.state.content, time);
        console.log("comment sent at: " + time + " " + this.state.content);
        this.setState({"content": ""});
    }

    postCaption = (source, comment, timestamp) => {
        let updater = {};
        updater[timestamp] = comment;
        console.log(updater);
        
        firebase.database().ref(source)
          .update(updater)
          .catch((error) => {
            console.log(error.message);
          });
      }

    render() {
        return(
            <InputGroup>
            <InputGroupAddon addonType="prepend"><Button onClick={this.sendComment}>Send</Button></InputGroupAddon>
            <Input onChange={(event) => this.updateValue("content", event.target.value)} value={this.state.content}></Input>
          </InputGroup>
        );
    }
}