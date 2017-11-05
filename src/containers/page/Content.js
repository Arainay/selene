import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import MainPage from '../../components/MainPage';
import GatewayPage from '../GatewayPage';
import DevicesPage from '../DevicesPage';
import MessagesPage from '../MessagesPage';
import ProvidersPage from '../ProvidersPage';

import '../assets/styles/content.less';

class Content extends PureComponent {
  render() {
    return (
      <main className="page-content container">
        <div className="page-content__container">
          <Route exact path="/" component={ MainPage } />
          <Route path="/gateway" component={ GatewayPage } />
          <Route path="/devices" component={ DevicesPage } />
          <Route path="/messages" component={ MessagesPage } />
          <Route path="/providers" component={ ProvidersPage } />
        </div>
      </main>
    );
  }
}

export default withRouter(Content);