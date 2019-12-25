import React, { Component } from "react";
import "./BoxContainer.css";

import ColorBox from "./ColorBox";

class BoxContainer extends Component {
  static defaultProps = {
    allcolors: [
      "#CD5C5C",
      "#F08080",
      "#FA8072",
      "#E9967A",
      "#FF1493",
      "#FFA07A",
      "#FFA500",
      "#FFDAB9",
      "#8FBC8B",
      "#00FFFF",
      "#4682B4",
      "#B0E0E6",
      "#BC8F8F",
      "#778899",
      "#FFDEAD",
      "#006400"
    ]
  };

  selectColor() {
    const ncolors = this.props.allcolors.length;
    let ind = Math.floor(Math.random() * ncolors);
    return this.props.allcolors[ind];
  }

  render() {
    return (
      <div className="BoxContainer">
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
        <ColorBox bgcolor={this.selectColor()} />
      </div>
    );
  }
}

export default BoxContainer;
