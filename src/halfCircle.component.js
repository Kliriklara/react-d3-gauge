import React from 'react';

const axisFontStyle = {
  fontFamily: 'Arial',
  textAnchor: 'middle',
  fontSize: 12
};

const getHalfCircleStyle = props => {
  return {
    fill: 'none',
    stroke: props.color || 'black',
    strokeWidth: props.lineWidth || 5
  }
};

const getHalfCircleMeasurements = (size=200, lineWidth=5) => {
  return {
    cutoffWidth: size + lineWidth * 2,
    cutoffHeight: size / 2 + lineWidth,
    circleX: size/ 2 + lineWidth,
    circleY: size / 2 + lineWidth,
    circleRadius: size / 2
  };
};

export default class HalfCircleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      range: props.range,
      unit: props.unit,
      size: props.size,
      lineWidth: props.lineWidth,
      transform: props.transform,
      circleStyle: getHalfCircleStyle(props),
      circleMeasurements: getHalfCircleMeasurements(props.size, props.lineWidth)
    };
  }

  render() {
    return (
    <g className="circle-component">
      <clipPath id="cut-off-bottom">
        <rect x="0" y="0" width={this.state.circleMeasurements.cutoffWidth} height={this.state.circleMeasurements.cutoffHeight} />
      </clipPath>
      <circle style={this.state.circleStyle} transform={this.state.transform} r={this.state.circleMeasurements.circleRadius} cx={this.state.circleMeasurements.circleX} cy={this.state.circleMeasurements.circleY} clipPath="url(#cut-off-bottom)" />
      <g style={axisFontStyle}>
        <text transform={`translate(${this.state.lineWidth}, 310)`}>{this.state.unit} {this.state.range[0]}</text>
        <text transform={`translate(${this.state.size + this.state.lineWidth}, 310)`}>{this.state.unit} {this.state.range[1]}</text>
      </g>
    </g>
    );
  }
}

export {
  getHalfCircleStyle,
  getHalfCircleMeasurements
}
