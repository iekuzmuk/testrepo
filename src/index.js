import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
       apiKey: "AIzaSyBG5ABA-8Su9acXzf0mX2rC0GIRbd5hAqk",
    authDomain: "ivank-6084c.firebaseapp.com",
    databaseURL: "https://ivank-6084c.firebaseio.com",
    projectId: "ivank-6084c",
    storageBucket: "ivank-6084c.appspot.com",
    messagingSenderId: "781225092700"
  };
  
  firebase.initializeApp(config);
  

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

