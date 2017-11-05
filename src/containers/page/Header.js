import React, { Component } from 'react';

import Navigation from '../../components/Navigation';

import '../assets/styles/header/header.less';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header page-border container">
        <div className="page-header__inside">
          <Navigation/>
          <div className="page-header__user">
            <span className="page-header__user-label">admin</span>
          </div>
        </div>
      </header>
    );
  }
}