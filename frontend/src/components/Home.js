import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './Home.css';
import Countdown from './countdown/Countdown';
import SnowStorm from 'react-snowstorm';
import './Faq.css'


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
        <div> 
        <section className="sec-faq">
        <div className="content">
        <h2><a className="#sec-faq-a">How</a> does this work?</h2>
          <br></br>
          <ul>
            <li>Sign up on Nov. 22 to participate in the Secret Santa draw.</li>
            <br></br>
            <li>Make sure to add your interests and price range so we can match you with your perfect Santa!</li>
            <br></br>

            <li> Tell your friends about Cornell Secret Santa and wait till our Secret Santa reveal on Dec. 6!</li>
            <br></br>

            <li> Purchase your gift for your gift receiver! </li> 
            <br></br>

            <li> Show up to our Gift Day on Dec. 10 at Ho Plaza (link to FB event) with your gift and find your gift receiver and Secret Santa! </li>

          </ul>
          </div>
          </section>
      </div>
      </div>
      
    );
  }
}
