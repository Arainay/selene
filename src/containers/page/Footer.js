import React, { Component } from 'react';

import '../assets/css/footer.css';
import logo from '../assets/images/Arrow_worm_white.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer page-border container">
        <div className="page-footer__inside">
          <div className="copyright">
            &copy; 2017 Arrow Electronics, Inc. All Rights Reserved.
          </div>
          <div className="page-footer__logo">
            <img src={ logo } alt="" height="60"/>
          </div>
        </div>
      </footer>
    );
  }
}