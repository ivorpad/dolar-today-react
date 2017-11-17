
import React from 'react';
 /*eslint-disable no-unused-vars*/
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
 /*eslint-disable no-unused-vars*/
import canvas from 'canvas-to-blob';  

class Button extends React.Component {


  renderImage() {
    const element = document.getElementById('dolartoday');
    let image;

    return html2canvas(element).then(function(canvas) {
      canvas.toBlob(function(blob) {
          saveAs(blob, "dolartoday.png");
      });
    });
  }

  render() {
    return(
      <button className="download" onClick={this.renderImage}>Download Image</button>
    )
  }
}

export default Button;
