import React, { Component } from 'react';
import './Home.css';
import './Faq.css'
import Countdown from './countdown/Countdown';
import Navbar from './layout/Navbar';
import SnowStorm from 'react-snowstorm';
import santa_image from '../media/santa_image.png';
import secret_santa from '../media/secret_santa.png';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div>
         <Navbar />
        <img className="santa_image" src={santa_image} />
        <SnowStorm />
        
        <br></br>
        <section className="sec-faq">
      <div className="content">
        <h1> Ho Ho Ho! </h1>
        <h2><a className="#sec-faq-a" >Welcome</a>  to the 2019 Secret Santa Gift Exchange!</h2>
        <h2><a className="#sec-faq-a">What</a> is this event?</h2>
        <h4>This Christmas, we want everyone at
          Cornell to enjoy the festive season by participating in a campus-wide
          Secret Santa gift exchange!</h4>
          <h2><a className="#sec-faq-a">How</a> does this work?</h2>
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
    );
  }
}
