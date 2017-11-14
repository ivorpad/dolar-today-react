import React from 'react';

class Price extends React.Component {
  constructor() {
    super();

    this.state = {
      dolar: "",
      eur: ""
    };
  }

  render() {
    return (
      <div className="price">
        <h4 className="dolar">$ {this.state.dolar} Bs. F</h4>
        <h4 className="euro">€ {this.state.eur} Bs. F</h4>
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

        this.setState({ dolar, eur });
      });
  }
}

export default Price;
