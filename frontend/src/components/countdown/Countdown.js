import React, { Component } from "react";
import "./countdown.css";
import background from "../../media/background.png";

import arrow from "../../media/arrow.png";
import logo from "../../media/logo.png";
import gift from "../../media/gifts.png";

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    setInterval(() => this.countdown(), 1000);
  }

  countdown() {
    const current = new Date();
    const eventDate = new Date(1575640800 * 1000);

    const current_time = current.getTime();
    const event_time = eventDate.getTime();
    const remain_time = event_time - current_time;

    var seconds = Math.floor(remain_time / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div>
        
        <div className="container">
          <img className="background" src={background} />
          <div className="countdownBox">
            <div className="countdownRow">
              <h3> {this.state.days} </h3>
              <h3> : </h3>
              <h3> {this.state.hours} </h3>
              <h3> : </h3>
              <h3> {this.state.minutes} </h3>
              <h3> : </h3>
              <h3> {this.state.seconds} </h3>
            </div>
            <div className="countdownRow1">
              <div className="col1">
                <h3> DAYS </h3>
                <h3> HOURS </h3>
              </div>
              <div className="col2">
                <h3> MINUTES </h3>
                <h3> SECONDS </h3>
              </div>
            </div>
            <br></br>
          </div>
          
          <h3 className="matchtext">Till matches are released...</h3>
          <img className="arrow" src={arrow} />
        </div>
        <br></br>
        <br></br>

        <div className="textrow">
          <div className="imgcol">
            {/* <h2 className="biggertext"> CORNELL</h2>
            <h2 className="smallertext"> SECRET SANTA</h2> */}
            <img className = "logo" src = {logo}></img>
          </div>
          <div className="textcol">
            <p className="normaltext" >
              <br></br>
              Welcome to Cornell Secret Santa! This Christmas, we want everyone
              at Cornell to enjoy the festive season by participating in a
              campus-wide Secret Santa gift exchange!
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="textrow">
          <div className="textcol2">
          {/* <h4 className = "paragraph">
              <b>How</b> does this work?
            </h4 >
            <br></br> */}
            <ol className = "list">
              <br></br>
              <br></br>
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
            </ol>
           
          </div>
          <div className="textcol">
            <h4 className="paragraph">
            <img className = "gift" src = {gift}></img>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
