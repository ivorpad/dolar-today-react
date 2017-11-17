import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      trm: "",
      vef: ""
    };
  }

  render() {

    let { trm, vef } = this.state;

    return (
      <div className="footer">
        ${"TRM  " + trm + " / 1 VEF = " + vef}
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
        let trm = val["USDCOL"].ratetrm;
        let vef = val["COL"].transfer;

        this.setState({ trm, vef });
      });
  }
}

export default Footer;
