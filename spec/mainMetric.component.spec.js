import React from 'react';
import MainMetricComponent from '../src/components/mainMetric.component';
import { shallow } from './enzyme';

describe('<MainMetricComponent />', () => {
  it('imports MainMetricComponent component', () => {
    expect(MainMetricComponent).toBeTruthy();
  });
  it('mounts MainMetricComponent component successfully', () => {
    const wrapper = shallow(<MainMetricComponent data={{value: 20, unit: 'GBP'}} />);
    expect(wrapper.find('.main-metric-component').length).toBe(1);
    expect(wrapper.find('text').length).toBe(1);
  });
});
