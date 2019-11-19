import React from 'react';
import logo from './logo.svg';
import './App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAIlaCmBLkyR7ULibDrOl_sDkVa1vL6fKM',
  authDomain: 'cornell-secret-santa.firebaseapp.com',
  databaseURL: 'https://cornell-secret-santa.firebaseio.com',
  projectId: 'cornell-secret-santa',
  storageBucket: 'cornell-secret-santa.appspot.com',
  messagingSenderId: '813348939741',
  appId: '1:813348939741:web:8d829a38a20481a96df834'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <script src="/__/firebase/7.4.0/firebase-app.js"></script>
      <script src="/__/firebase/7.4.0/firebase-auth.js"></script>
      <script src="/__/firebase/7.4.0/firebase-firestore.js"></script>
      <script src="/__/firebase/init.js"></script>
    </div>
  );
}

export default App;
