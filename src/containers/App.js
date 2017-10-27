import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Header from './page/Header';
import Content from './page/Content';
import Footer from './page/Footer';

import * as gatewayActions from '../actions/gatewayActions';

import '../assets/style.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gateway: state.gateway
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gatewayActions: bindActionCreators(gatewayActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));