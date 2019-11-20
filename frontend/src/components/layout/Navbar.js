import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav id="navbar">
          <ul>
            <li className="">
              <a>Home</a>
            </li>
            <li className="">
              <a>FAQ</a>
            </li>
            <li className="">
              <a>Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
