import React, { Component } from 'react';
import Header from './Header';
import Price from './Price';
import Footer from './Footer';
import PriceUpdateDate from './PriceUpdateDate';
import './App.css';
/*eslint-disable no-unused-vars*/
import html2canvas from 'html2canvas';
import Button from './Button'


class App extends Component {
  render() {

    return (
      <div className="container">
        <div id="dolartoday" className="dolartoday">
        <Header title="Venezuela" />
        <PriceUpdateDate />
        <Price />
        <Footer />
      </div>
      <Button title="title" />
      </div>
    );
  }
}

export default App;
