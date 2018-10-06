import React from 'react';
import Gauge from '../src/gauge.component';
import { shallow } from './enzyme';

describe('<Gauge />', () => {
  it('imports Gauge component', () => {
    expect(Gauge).toBeTruthy();
  });
  it('mounts Gauge component successfully', () => {
    const wrapper = shallow(<Gauge data={{value: 20, unit: 'GBP'}} />);
    expect(wrapper.find('.gauge').length).toBe(1);
  });
});
