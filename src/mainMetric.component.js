import React from 'react';

const mainMetricStyle = {
  fontSize: 50,
  textAnchor: 'middle'
}

export default class MainMetricComponent  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      value: props.value
    };
  }

  render() {
    return (
    <g transform="translate(210, 50)" style={mainMetricStyle} className="main-metric-component">
      <text>{this.state.value}</text>
    </g>
    );
  }
}

export {
  getHalfCircleStyle,
  getHalfCircleMeasurements
}
