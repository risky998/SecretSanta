import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <nav id="navbar">
          <ul>
            <li>
              <Link to={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link to={"/faq"}>
                <a>FAQ</a>
              </Link>
            </li>
            <li className="">
              <Link to={"/signup"}>
                <a>Sign Up</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
