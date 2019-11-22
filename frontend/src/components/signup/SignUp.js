import React, { Component } from 'react';
// import { CheckboxesGroup } from '../layout/Checkbox';
import { RadioButtonsGroup } from '../layout/Radio';
import { SignupButton } from '../layout/SignupButton';
import './signup.css';

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
    this.state = {
      priceRange: 'five'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPriceRangeChange = this.onPriceRangeChange.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  onPriceRangeChange(price) {
    this.setState(
      {
        priceRange: price
      },
      () => console.log(this.state.priceRange)
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const params = {
      firstName: this.inputFirstName.value,
      lastName: this.inputLastName.value,
      email: this.inputEmail.value,
      message: this.inputMessage.value,
      priceRange: this.state.priceRange
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
      <div className="form-container">
        <form className="signup-form">
          <span className="signup-form-title">Cornell Secret Santa Form</span>

          <div
            className="input-container validate-input wrap-input"
            data-validate="Name is required"
          >
            <span className="input-label">First Name</span>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your name"
              id="first_name"
              ref={first_name => (this.inputFirstName = first_name)}
            />
            <span className="input-foucs"></span>
          </div>

          <div
            className="input-container validate-input wrap-input"
            data-validate="Name is required"
          >
            <span className="input-label">Last Name</span>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your name"
              id="last_name"
              ref={last_name => (this.inputLastName = last_name)}
            />
            <span className="input-foucs"></span>
          </div>

          <div
            className="input-container validate-input wrap-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span className="input-label">Email</span>
            <input
              className="input-box"
              type="text"
              placeholder="@cornell.edu"
              id="email"
              ref={email => (this.inputEmail = email)}
            />
            <span className="input-focus"></span>
          </div>

          <div
            className="input-container validate-input wrap-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span className="input-label">Confirm Email</span>
            <input
              className="input-box"
              type="text"
              placeholder=""
              id="confirm_email"
              ref={confirm_email => (this.inputConfirmEmail = confirm_email)}
            />
            <span className="input-focus"></span>
          </div>

          <div className="custom-container ">
            {/* <CheckboxesGroup onPriceRangeChange={this.onPriceRangeChange} /> */}
            <RadioButtonsGroup onPriceRangeChange={this.onPriceRangeChange} />
          </div>

          <div
            className="input-container validate-input"
            data-validate="Message is required"
          >
            <span className="input-label">Message</span>
            <textarea
              className="input-box"
              placeholder="Your message here..."
              id="message"
              ref={message => (this.inputMessage = message)}
            ></textarea>
            <span className="input-foucs"></span>
          </div>
        </form>

        <SignupButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
