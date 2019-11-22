import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import SignUp from './components/signup/SignUp';
import Home from './components/Home';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SignUp />
      </>
    );
  }
}
