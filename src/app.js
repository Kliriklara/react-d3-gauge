import React from 'react';
import ReactDOM from 'react-dom';

import Gauge from './components/gauge.component';

const data = require('./data.json');

const Index = () => {
  return (
    <div>
      <Gauge data={data} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('main'));
