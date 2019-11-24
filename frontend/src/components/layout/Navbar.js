import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';
import navlogo from '../../media/navlogo.png';

const NavigationBar = props => {
  const { pathname } = props.location;
  return (
    <Navbar bg="light" expand="lg">
      <Link to={'/'}>
        <img className="navlogo" src={navlogo} alt="logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: 'auto' }}>
          <Nav.Link>
            <Link
              className={'link ' + (pathname === '/' ? 'active-link' : '')}
              to={'/'}
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className={
                'link ' + (pathname === '/signup' ? 'active-link' : '')
              }
              to={'/signup'}
            >
              Sign Up
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className={'link ' + (pathname === '/faq' ? 'active-link' : '')}
              to={'/faq'}
            >
              FAQ
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavigationBar);
