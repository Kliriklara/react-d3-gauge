import React from 'react';

const getHalfCircleStyle = props => {
  return {
    fill: 'none',
    stroke: props.color || 'black',
    strokeWidth: props.lineWidth || 5
  }
};

const getHalfCircleMeasurements = (size=100, lineWidth=5) => {
  return {
    cutoffWidth: size * 2 + lineWidth * 2,
    cutoffHeight: size + lineWidth,
    circleX: size + lineWidth,
    circleY: size + lineWidth,
    circleRadius: size
  };
};

export default class HalfCircleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
      style: getHalfCircleStyle(props),
      circleMeasurements: getHalfCircleMeasurements(props.size, props.lineWidth)
    };
  }

  render() {
    return (
    <g style={this.state.style} className="circle-component">
      <clipPath id="cut-off-bottom">
        <rect x="0" y="0" width={this.state.circleMeasurements.cutoffWidth} height={this.state.circleMeasurements.cutoffHeight} />
      </clipPath>
      <circle r={this.state.circleMeasurements.circleRadius} cx={this.state.circleMeasurements.circleX} cy={this.state.circleMeasurements.circleY} clipPath="url(#cut-off-bottom)" />
    </g>
    );
  }
}

export {
  getHalfCircleStyle,
  getHalfCircleMeasurements
}
