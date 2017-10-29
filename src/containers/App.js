import React, { Component } from 'react';

import Header from './page/Header';
import Content from './page/Content';
import Footer from './page/Footer';

import '../assets/style.css';

export default class App extends Component {
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