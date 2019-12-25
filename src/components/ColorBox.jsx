import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: this.props.bgcolor
    };
    this.handleClick = this.handleClick.bind(this);
  }

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

  handleClick() {
    //store the current color of box
    let val = this.state.bgcolor;
    // create a new array w/o the present color
    let newColorArray = this.props.allcolors.filter(item => item !== value);
    // pick any ranadom color from new array
    const ncolors = newColorArray.length;
    let ind = Math.floor(Math.random() * ncolors);
    let newColor = this.props.allcolors[ind];
    this.setState({ bgcolor: newColor });
  }

  render() {
    return (
      <div
        className="ColorBox"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.bgcolor }}
      />
    );
  }
}

export default ColorBox;
