import React from 'react';

const mainMetricStyle = {
  fontSize: 50,
  fontFamily: 'Arial',
  textAnchor: 'middle'
}

export default class MainMetricComponent  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPos: props.xPos,
      value: props.data.value,
      unit: props.data.unit
    };
  }

  render() {
    return (
    <g transform={`translate(${this.props.xPos}, 50)`} style={mainMetricStyle} className="main-metric-component">
      <text>{this.state.unit} {this.state.value}</text>
    </g>
    );
  }
}

export {
  getHalfCircleStyle,
  getHalfCircleMeasurements
}
