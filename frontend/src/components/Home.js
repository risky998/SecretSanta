import React, { Component } from 'react';
import './Home.css';
import Countdown from './countdown/Countdown';
import SnowStorm from 'react-snowstorm';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <div className="countdown-container">
          <Countdown />
        </div>
        <SnowStorm />
      </div>
    );
  }
}
