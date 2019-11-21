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
        <img className="secret_santa" src={secret_santa} />
        <Countdown />
        <br></br>
       
      </div>
    );
  }
}
