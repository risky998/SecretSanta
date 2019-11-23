import React, { Component } from 'react';
import './Home.css';
import Countdown from './countdown/Countdown';
import SnowStorm from 'react-snowstorm';
import './Faq.css';

export default class Home extends Component {
  render() {
    return (
      <div className="parent-container">
        <div className="countdown-container">
          <Countdown />
        </div>
        <SnowStorm />

      </div>
    );
  }
}
