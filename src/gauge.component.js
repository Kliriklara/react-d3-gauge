import React from 'react';
import HalfCircleComponent from './halfCircle.component';
import MainMetricComponent from './mainMetric.component';

const gaugeStyle = {
  width: '100%',
  height: 500
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
        <MainMetricComponent value={this.props.data.value} />
        <HalfCircleComponent transform="translate(0, 100)" size={200} lineWidth={20} color="grey" />
      </svg>
    );
  }
}
