import React, { Component } from 'react';
import { CheckboxesGroup } from '../layout/Checkbox';
import { RadioButtonsGroup } from '../layout/Radio';
import { SignupButton } from '../layout/SignupButton';
import { pickBy, keys, mapKeys } from 'lodash';
import './signup.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        message: '',
        priceRange: 'five'
      },
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      confirmEmailError: false,
      messageError: false,
      categories: {
        Art: true,
        Books: false,
        Fashion: false,
        Food: false,
        Games: false,
        Movies: false,
        Sports: false,
        Stationery: false,
        Other: false
      },
      otherInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onPriceRangeChange = this.onPriceRangeChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onOtherInputChange = this.onOtherInputChange.bind(this);
  }

  // componentDidMount() {
  //   firebase.initializeApp(firebaseConfig);
  // }

  onCheckboxChange(name, event) {
    this.setState(
      {
        categories: {
          ...this.state.categories,
          [name]: event.target.checked
        }
      },
      () => console.log(this.state.categories)
    );
  }

  onOtherInputChange(event) {
    const value = event.target.value;
    this.setState({
      otherInput: value
    });
  }

  handleSubmit() {
    let form = this.state.values;
    const categories = keys(
      pickBy(
        mapKeys(this.state.categories, function(value, key) {
          if (value) {
            return key;
          }
        })
      )
    );
    form['categories'] = categories;
    if (this.state.categories.Other) {
      form['otherInput'] = this.state.otherInput;
    }
    console.log(form);
  }

  handleChange(event, key) {
    const value = event.target.value;
    this.setState({
      values: {
        ...this.state.values,
        [key]: value
      }
    });
  }

  onPriceRangeChange(price) {
    this.setState({
      priceRange: price
    });
  }

  render() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      confirmEmailError,
      messageError
    } = this.state;
    return (
      <div className="form-container">
        <form className="signup-form">
          <span className="signup-form-title">Cornell Secret Santa Form</span>

          <div className="input-container validate-input wrap-input">
            <span className="input-label">First Name</span>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your name"
              id="first_name"
              value={this.state.firstName}
              onChange={e => this.handleChange(e, 'firstName')}
            />
            {!firstNameError ? (
              <h6 className="error-message">Enter your name!</h6>
            ) : null}
          </div>

          <div className="input-container validate-input wrap-input">
            <span className="input-label">Last Name</span>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your name"
              id="last_name"
              onChange={e => this.handleChange(e, 'lastName')}
            />
            {!lastNameError ? (
              <h6 className="error-message">Enter your name!</h6>
            ) : null}
          </div>

          <div className="input-container validate-input wrap-input">
            <span className="input-label">Email</span>
            <input
              className="input-box"
              type="text"
              placeholder="@cornell.edu"
              id="email"
              onChange={e => this.handleChange(e, 'email')}
            />
            {!emailError ? (
              <h6 className="error-message">Enter a valid Cornell email!</h6>
            ) : null}
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
              onChange={e => this.handleChange(e, 'confirmEmail')}
            />
            {!confirmEmailError ? (
              <h6 className="error-message">Emails do not match</h6>
            ) : null}
          </div>

          <div className="custom-container ">
            <RadioButtonsGroup onPriceRangeChange={this.onPriceRangeChange} />
          </div>
          <div className="custom-container ">
            <CheckboxesGroup
              categories={this.state.categories}
              onCheckboxChange={this.onCheckboxChange}
              onOtherInputChange={this.onOtherInputChange}
            />
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
              onChange={e => this.handleChange(e, 'message')}
            ></textarea>
            {!messageError ? (
              <h6 className="error-message">
                Please enter a message to your recipient
              </h6>
            ) : null}
          </div>
        </form>

        <SignupButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
