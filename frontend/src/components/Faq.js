import React, { Component } from 'react';
import './Home.css';
import './Faq.css'
import Navbar from './layout/Navbar';
import SnowStorm from 'react-snowstorm';
import santa_image from '../media/santa_image.png';

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
        {/* <h1> HO HO HO! </h1> */}
        <br></br>
        <h1><a className="#sec-faq-a" >Welcome</a>  to the 2019 Secret Santa Gift Exchange FAQ Section!</h1>
        <br></br>
        {/* <h2><a className="#sec-faq-a">What</a> is this event?</h2>
        <br></br>
        <h5>This Christmas, we want everyone at
          Cornell to enjoy the festive season by participating in a campus-wide
          Secret Santa gift exchange!</h5> */}
          <br></br>
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

          <br></br>
          <br></br>

          <h2><a className="#sec-faq-a">What</a> gifts could I buy?</h2>
          <br></br>
          <h5> Of course, the gifts you're willing to buy will be based on the price range you entered when you sign up!</h5>
          <h5> Here are some ideas! </h5>
          <br></br> 
          <ul>
            <li> Reading: Bookmarks, Reading Light, A Good Book</li>
            <br></br>
            <li>Music: CDs, A Month of Apple Music</li>
            <br></br>

            <li> Tell your friends about Cornell Secret Santa and wait till our Secret Santa reveal on Dec. 6!</li>
            <br></br>

            <li> Purchase your gift for your gift receiver! </li> 
            <br></br>

            <li> Show up to our Gift Day on Dec. 10 at Ho Plaza (link to FB event) with your gift and find your gift receiver and Secret Santa! </li>

          </ul>
          <br></br>
          <h2><a className="#sec-faq-a">How</a> does the matching process work?</h2>
          <br></br>
          
          <ul>
            <li> You enter your interests and price range</li>
            <br></br>
            <li>Our algorithm matches you with your perfect Secret Santa!</li>
            <br></br>
            </ul>
          


            <br></br>
          <h2><a className="#sec-faq-a">What</a> happens if I don't get a gift?</h2>
          <br></br>
          
          <ul>
            <li> No one leaves without a gift!</li>
            <br></br>
            <li>If for some reason, you are giftless on the day of the event, the Cornell Secret Santa team will have a gift for you :)</li>
            <br></br>
            </ul>

      </div>
    </section>
       
      </div>
    );
  }
}
