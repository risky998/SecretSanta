import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
  }

  render() {
    return <Home />;
  }
}
