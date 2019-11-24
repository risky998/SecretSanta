import React, { Component } from 'react';
import './Home.css';
import './Faq.css';
import question from '../media/questions.png';

export default class FAQ extends Component {
  render() {
    return (
      <div className="parent-container">
        <section className="sec-faq">
          <div className="content">
          <h1><b>Frequently Asked Questions </b></h1>
          <h2 className = "colortext"> What happens if I don’t receive a gift on Gift Day? </h2>
          <p>All Santas are reminded to get a gift for their gift recipients!
          In the event that your Santa doesn’t show up with a gift on Gift Day,
          the Cornell Secret Santa team has spare gifts for you! We want to make sure
          this is an inclusive event and no one leaves Gift Day without a gift! </p>

          <h2 className = "colortext"> I don’t know what to get as a gift, what should I do? </h2>
          <p> We matched Santas and gift receivers based on their interests and
          price range! Check the email confirming your gift recipient to see what
          interests they have! </p>

          <h2 className ="colortext"> How am I being matched with my gift recipient and Secret Santa? </h2>
          <p> We have created a simple algorithm that matches people based on their
          common interests and price range for gifts in order to optimize your gift experience! </p>

          <h2 className = "colortext"> Can I contact my gift recipient before Gift Day? </h2>
          <p> Yes! Feel free to reach out to your gift recipient beforehand and make a new friend!
          However, if you want to keep the surprise factor you can also just meet your gift recipient on Gift Day. </p>

          <div className = "row"> 
            <div className = "imgcol">
             <h2 className = "colortext"> If you have any other questions or concerns, please contact any one of us </h2>
              <div className = "shiftcenter">
                <div className = "row">
                  <div className = "row">
                    <div className = "emails">
                      <p> yw456@cornell.edu, sp798@cornell.edu, rs868@cornell.edu </p>
                    </div>
                    </div>
                   <div className = "emails">
                      <p> hyw2@cornell.edu, kc677@cornell.edu, yy447@cornell.edu, sl2982@cornell.edu </p>
                    </div>
                    </div>
              </div>
            </div>
            <div className = "imgcol">
              <div className = "image">

            <img className ="imageblock" src={question} alt = "Question photo"/>
            </div>
            </div>

            
        </div>
 
          </div>
        </section>
      </div>
    );
  }
}
