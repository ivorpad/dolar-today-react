import React from 'react';

const Price = (props) => (
  <div className="price">
      <h4 className="dolar">$ {props.dolar + "   Bs.F"} </h4>
      <h4 className="euro">€ {props.eur + "   Bs.F"}</h4>
  </div>
);

export default Price;
