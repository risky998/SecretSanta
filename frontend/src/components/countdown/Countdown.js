import React, { Component } from "react";
import "./countdown.css";
import background from "./background.png";

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
              <h3> Days </h3>
              <h3> Hours </h3>
              <h3> Minutes </h3>
              <h3> Seconds </h3>
            </div>
          </div>
        </div>
        <div className="textrow">
          <div className="textcol">
            <h2 className="biggertext"> CORNELL</h2>
            <h2 className="smallertext"> SECRET SANTA</h2>
          </div>
          <div className="textcol">
            <h2 className="paragraph">
              Welcome to Cornell Secret Santa! This Christmas, we want everyone
              at Cornell to enjoy the festive season by participating in a
              campus-wide Secret Santa gift exchange!
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
