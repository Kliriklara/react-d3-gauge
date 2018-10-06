import React from 'react';
import HalfCircleComponent from './halfCircle.component';

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
        <HalfCircleComponent size={200} lineWidth={20} color="grey" />
      </svg>
    );
  }
}
