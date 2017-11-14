import React, { Component } from 'react';
import Header from './Header'
import Price from './Price'
import Footer from './Footer'
import PriceUpdateDate from './PriceUpdateDate'

import './App.css';

class App extends Component {
  render() {
    return (
     <div className="dolartoday">
        <Header title="Venezuela" />
        <PriceUpdateDate />
        <Price />
        <Footer />
      </div>
    );
  }
}

export default App;
