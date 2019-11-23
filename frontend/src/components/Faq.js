import React, { Component } from 'react';
import './Home.css';
import './Faq.css';
import SnowStorm from 'react-snowstorm';
import background from '../media/background-crop.png';

export default class FAQ extends Component {
  render() {
    return (
      <div >
        <img className="background" src={background} />
        <SnowStorm />
        <br></br>
        <section className="sec-faq">
          <div className="content">
            <h1>
              <b>Welcome</b> to the 2019 Secret Santa Gift Exchange FAQ Section!
            </h1>
            <br></br>
            <br></br>
            <h2>
              <b>How</b> does this work?
            </h2>
            <br></br>
            <ul>
              <li>
                Sign up on Nov. 22 to participate in the Secret Santa draw.
              </li>
              <br></br>
              <li>
                Make sure to add your interests and price range so we can match
                you with your perfect Santa!
              </li>
              <br></br>

              <li>
                {' '}
                Tell your friends about Cornell Secret Santa and wait till our
                Secret Santa reveal on Dec. 6!
              </li>
              <br></br>

              <li> Purchase your gift for your gift receiver! </li>
              <br></br>

              <li>
                {' '}
                Show up to our Gift Day on Dec. 10 at Ho Plaza (link to FB
                event) with your gift and find your gift receiver and Secret
                Santa!{' '}
              </li>
            </ul>

            <br></br>
            <br></br>

            <h2>
            <b>What</b> gifts could I buy?
            </h2>
            <br></br>
            <h5>
              {' '}
              Of course, the gifts you're willing to buy will be based on the
              price range you entered when you sign up!
            </h5>
            <h5> Here are some ideas! </h5>
            <br></br>
            <ul>
              <li> Reading: Bookmarks, Reading Light, A Good Book</li>
              <br></br>
              <li>Music: CDs, A Month of Apple Music</li>
              <br></br>

              <li>
                {' '}
                Tell your friends about Cornell Secret Santa and wait till our
                Secret Santa reveal on Dec. 6!
              </li>
              <br></br>

              <li> Purchase your gift for your gift receiver! </li>
              <br></br>

              <li>
                {' '}
                Show up to our Gift Day on Dec. 10 at Ho Plaza (link to FB
                event) with your gift and find your gift receiver and Secret
                Santa!{' '}
              </li>
            </ul>
            <br></br>
            <h2>
            <b>How</b> does the matching process work?
            </h2>
            <br></br>

            <ul>
              <li> You enter your interests and price range</li>
              <br></br>
              <li>Our algorithm matches you with your perfect Secret Santa!</li>
              <br></br>
            </ul>

            <br></br>
            <h2>
            <b>What</b> happens if I don't get a gift?
            </h2>
            <br></br>

            <ul>
              <li> No one leaves without a gift!</li>
              <br></br>
              <li>
                If for some reason, you are giftless on the day of the event,
                the Cornell Secret Santa team will have a gift for you :)
              </li>
              <br></br>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
