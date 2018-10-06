import React from 'react';
import ReactDOM from 'react-dom';

const data = require('./data.json');

const Index = () => {
  return <div>{data.value}</div>;
};

ReactDOM.render(<Index />, document.getElementById('main'));
