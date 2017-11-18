
import React from 'react';
 /*eslint-disable no-unused-vars*/
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
 /*eslint-disable no-unused-vars*/
import canvas from 'canvas-to-blob';  

const renderImage = () => {
    const element = document.getElementById('dolartoday');

    return html2canvas(element).then(function(canvas) {
      canvas.toBlob(function(blob) {
          saveAs(blob, "dolartoday.png");
      });
    });
}

const Button = (props) => (
  <button className="download" onClick={renderImage}>Download Image</button>
);


export default Button;
