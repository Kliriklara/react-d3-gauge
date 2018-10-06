import React from 'react';

export default class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className="gauge">
      <p>{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}
