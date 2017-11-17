import React from 'react';

class Price extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      dolar: "",
      eur: ""
    };
  }

  render() {

    let { dolar, eur } = this.state;

    return (
      <div className="price">
      
      { this.state.isLoading ? <p className="loader">Loading...</p> :  
        <div>
          <h4 className="dolar">$ {dolar + "   Bs.F"} </h4>
          <h4 className="euro">€ {eur + "   Bs.F"}</h4>
        </div>
        }   
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
        let dolar = val["USD"].dolartoday;
        let eur = val["EUR"].dolartoday;
        let isLoading = false

        this.setState({ dolar, eur, isLoading });
      });
  }
}

export default Price;
