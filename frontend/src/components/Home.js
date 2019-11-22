import React, { Component } from "react";
import "./Home.css";
import "./Faq.css";
import Countdown from "./countdown/Countdown";
import Navbar from "./layout/Navbar";
import SnowStorm from "react-snowstorm";
import santa_image from "../media/santa_image.png";
import secret_santa from "../media/secret_santa.png";
import background from "../media/background.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {/* <img className="background" src={background} /> */}
          <Countdown />
        </div>

        <SnowStorm />

        <br></br>
      </div>
    );
  }
}
