import React, { Component } from 'react';
// import './App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require('firebase/app');
// Add the Firebase products that you want to use
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

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  handleSubmit(event) {
    event.preventDefault();
    const params = {
      firstName: this.inputFirstName.value,
      lastName: this.inputLastName.value,
      email: this.inputEmail.value,
      message: this.inputMessage.value,
      priceRange: this.inputPriceRange.value
    };
    console.log(params);
    if (
      params.firstName &&
      params.lastName &&
      params.email &&
      params.message &&
      params.priceRange
    ) {
      let db = firebase.firestore();
      db.collection('users')
        .doc(params.email)
        .set({
          First_Name: params.firstName,
          Last_Name: params.lastName,
          Email: params.email,
          Message: params.message,
          Price_Range: params.priceRange
        })
        .then(() => {
          alert('success', 'Your message was sent successfull');
        })
        .catch(err => {
          console.log(err);
          alert('danger', 'Your message could not be sent');
        });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <form onSubmit={this.handleSubmit} ref="form">
            <div>
              <label>First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="First Name"
                ref={first_name => (this.inputFirstName = first_name)}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Last Name"
                ref={last_name => (this.inputLastName = last_name)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                ref={email => (this.inputEmail = email)}
              />
            </div>

            <div>
              <label>Price Range</label>
              <select
                id="priceRange"
                ref={priceRange => (this.inputPriceRange = priceRange)}
              >
                <option value="México">México</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Monterrey">Monterrey</option>
              </select>
            </div>

            <div>
              <label>Message</label>
              <textarea
                id="message"
                rows="3"
                ref={message => (this.inputMessage = message)}
              ></textarea>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}
