import React, { Component } from 'react';

import '../assets/styles/footer.less';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer page-border container">
        <div className="page-footer__inside">
          <div className="copyright">
            &copy; 2017 Company Name, Inc. All Rights Reserved.
          </div>
          <div className="page-footer__logo"></div>
        </div>
      </footer>
    );
  }
}