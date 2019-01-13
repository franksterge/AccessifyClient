import React, {Component} from 'react';
import {InputGroupAddon, Button, Input, InputGroup} from 'reactstrap';

export default class ComposeComment extends Component {

    constructor() {
        super();
        this.state = {
            content: ""
        };
    }

    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    sendComment = () => {
        let video = document.getElementById("video-player");

        let time = video.currentTime; 
        
        console.log("comment sent at: " + time + " " + this.state.content);
        this.setState({"content": ""});
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