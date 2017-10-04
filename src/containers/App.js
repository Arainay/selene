import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from './page/Header';
import Content from './page/Content';
import Footer from './page/Footer';

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

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));