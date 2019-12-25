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
    bgcolor: "pink",
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
    let newColorArray = [...this.props.allcolors];
    let indexOfColor = newColorArray.indexOf(val);

    // reference:https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    if (indexOfColor > -1) {
      newColorArray.splice(indexOfColor, 1);
    }
    // pick any ranadom color from new array
    let ind = Math.floor(Math.random() * newColorArray.length);
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
