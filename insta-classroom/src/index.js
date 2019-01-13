import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

var config = {
    apiKey: "AIzaSyCz0dJ74ApV0AT7Qc4QVhf20bLIpYGqmY0",
    authDomain: "realtime-captcha.firebaseapp.com",
    databaseURL: "https://realtime-captcha.firebaseio.com",
    projectId: "realtime-captcha",
    storageBucket: "realtime-captcha.appspot.com",
    messagingSenderId: "195816717898"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
