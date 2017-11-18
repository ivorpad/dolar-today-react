import React, { Component } from 'react';
import Header from './Header';
import Price from './Price';
import Footer from './Footer';
import PriceUpdateDate from './PriceUpdateDate';
import './App.css';
import Button from './Button'


class App extends Component {

  constructor(props) {
    super();

    this.state = {
      trm: '',
      vef: '',
      dolar: '',
      eur: '',
      isLoading: true,
      date: ''
    }
  }

  render() {

    const { trm, vef, dolar, eur, isLoading, date } = this.state;

    return (
      <div className="container">
        <div id="dolartoday" className="dolartoday">
          <Header title="Venezuela" />
          <PriceUpdateDate date={date} />
          { isLoading ? <p className="loader">Loading...</p> :  
            <Price dolar={dolar} eur={eur}/>
          }
          <Footer trm={trm} vef={vef} />
        </div>
        <Button />
      </div>

    );
  }

  componentDidMount() {
    fetch("https://s3.amazonaws.com/dolartoday/data.json")
      .then(res => res.json())
      .catch(err => {
        throw new Error("Data cannot be reached. Check the URL.");
      })

      .then(val => {
        
        const trm = val["USDCOL"].ratetrm,
              vef = val["COL"].transfer,
              dolar = val["USD"].dolartoday,
              eur = val["EUR"].dolartoday,
              date = val._timestamp.fecha,
              isLoading = false;

        this.setState({ trm, vef, dolar, eur, isLoading, date });
      });
  }

}

export default App;
