import React from 'react';
import HalfCircleComponent from './halfCircle.component';
import MainMetricComponent from './mainMetric.component';

const width = 400;
const height = 500;
const lineWidth = 20;

const gaugeStyle = {
  width: '100%',
  height
};


export default class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <svg style={gaugeStyle} className="gauge">
        <MainMetricComponent xPos={width / 2 + lineWidth} data={this.props.data} />
        <HalfCircleComponent transform="translate(0, 75)" size={width} lineWidth={lineWidth} color="grey" />
      </svg>
    );
  }
}
