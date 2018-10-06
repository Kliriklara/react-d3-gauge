import React from 'react';

const halfCircleStyle = {
  fill: 'none',
  stroke: 'black',
  strokeWidth: 3
};

export default () => {
  return (
    <g style={halfCircleStyle} className="circle-component">
      <clipPath id="cut-off-bottom">
        <rect x="0" y="0" width="210" height="105" />
      </clipPath>
      <circle r="100" cx="105" cy="105" clipPath="url(#cut-off-bottom)" />
    </g>
  );
}
