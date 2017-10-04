import React, { Component } from 'react';

import '../assets/css/header.css';
import logo from '../assets/images/arrow-connect-logo-white.png';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header page-border container">
        <div className="page-header__inside">
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__list-item">
                <img src={ logo } alt="" className="page-header__logo" height="55" />
              </li>
              <li className="main-nav__list-item">
                home
              </li>
              <li className="main-nav__list-item">
                gateway
              </li>
              <li className="main-nav__list-item">
                devices
              </li>
              <li className="main-nav__list-item">
                error messages
              </li>
              <li className="main-nav__list-item">
                cloud providers
              </li>
            </ul>
          </nav>
          <div className="page-header__user">admin</div>
        </div>
      </header>
    );
  }
}