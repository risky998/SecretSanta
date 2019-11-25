import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './countdown.css';
import background from '../../media/background.png';
import logo from '../../media/logo.png';
import gift from '../../media/gifts.png';

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

  componentDidMount1() {
    window.scrollTo(0, 0);
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

    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div className="parent-container">
        <div>
          <img className="background" src={background} />
          <div className="countdownRow">
            <div className="countdownCol">
              <h3 className="time-text">{this.state.days}</h3>
              <h3 className="day-text">DAYS</h3>
            </div>
            <div className="countdownColon">
              <h3>:</h3>
            </div>
            <div className="countdownCol">
              <h3 className="time-text">{this.state.hours}</h3>
              <h3 className="day-text">HOURS</h3>
            </div>
            <div className="countdownColon">
              <h3>:</h3>
            </div>
            <div className="countdownCol">
              <h3 className="time-text">{this.state.minutes}</h3>
              <h3 className="day-text">MINUTES</h3>
            </div>
            <div className="countdownColon">
              <h3>:</h3>
            </div>
            <div className="countdownCol">
              <h3 className="time-text">{this.state.seconds}</h3>
              <h3 className="day-text">SECONDS</h3>
            </div>
          </div>

          <h3 className="matchtext">Till matches are released...</h3>
        </div>

        <div className="textrow1">
          <div className="col-md-6">
            <img className="logo" src={logo}></img>
          </div>
          <div className="text-center col-md-6">
            <p className="normaltext">
              <br></br>
              Welcome to Cornell Secret Santa! This Christmas, we want everyone
              at Cornell to enjoy the festive season by participating in a
              campus-wide Secret Santa gift exchange!
            </p>
          </div>
        </div>

        <div className="textrow1">
          <div className="text-left col-md-6">
            <h2 className="How_works"> How this works</h2>
            <ol className="list">
              <li>
                Sign up on <strong>Nov. 22</strong> to participate in the Secret
                Santa draw.
              </li>
              <li>
                Make sure to add your interests and price range so we can match
                you with your perfect Santa!
              </li>
              <li>
                Tell your friends about Cornell Secret Santa and wait till our
                Secret Santa reveal on <strong>Dec. 6</strong>!
              </li>
              <li> Purchase your gift for your gift receiver! </li>
              <li>
                Show up to our
                <a href="https://www.facebook.com/events/486709211935483/">
                 <u> Gift Day on <strong>Dec. 10 at Ho Plaza</strong> </u>
                </a>
                with your gift and find your gift receiver and Secret Santa!{' '}
              </li>
            </ol>
            <p className="normaltext1"> May your wish come true! </p>
            <p className="normaltext1">— ❤ Cornell Secret Santa Team </p>
          </div>
          <div className="text-center col-md-6">
            <img className="gift" src={gift}></img>
          </div>
        </div>
        <div className="signuprow">
          <Link to={'/signup'} onClick={this.componentDidMount1}>
            Sign Up Here
          </Link>
        </div>
      </div>
    );
  }
}
