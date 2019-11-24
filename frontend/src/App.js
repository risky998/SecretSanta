import React, { Component } from 'react';
import NavigationBar from './components/layout/Navbar';
import SignUp from './components/signup/SignUp';
import Home from './components/Home';
import FAQ from './components/Faq';
import { Route } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/home'} component={Home} />
        <Route exact={true} path={'/faq'} component={FAQ} />
        <Route exact={true} path={'/signup'} component={SignUp} />
      </div>
    );
  }
}
