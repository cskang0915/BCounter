import React, { Component } from 'react';
import Pencil from '../../Pics/Pencil/Pencil.png';

class PencilLogo extends Component {
  render() {
    return (
      <img src={Pencil} style={{backgroundColor: "red"}} alt="Pencil SVG"/>
    )
  }
}

export default PencilLogo
