import React from 'react';

class PriceUpdateDate extends React.Component {
  constructor() {
    super();

    this.state = {
      date: ""
    };
  }

  render() {
    return (
      <div className="date">
        <span> {this.state.date} </span>
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
        let date = val._timestamp.fecha;
        this.setState({ date });
      });
  }
}

export default PriceUpdateDate;
