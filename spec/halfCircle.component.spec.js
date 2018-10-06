import React from 'react';
import {
  getHalfCircleStyle,
  getHalfCircleMeasurements
} from '../src/components/halfCircle.component';
import HalfCircleComponent from '../src/components/halfCircle.component';
import { shallow } from './enzyme';

describe('<HalfCircleComponent />', () => {

  it('imports HalfCircle component', () => {
    expect(HalfCircleComponent).toBeTruthy();
  });
  it('mounts HalfCircle component successfully', () => {
    const wrapper = shallow(<HalfCircleComponent transform="translate(0, 75)" unit="GBP" range={[0, 200]} size={400} lineWidth={20} color="grey" />);
    expect(wrapper.find('.circle-component').length).toBe(1);
    expect(wrapper.find('text').length).toBe(2);
    expect(wrapper.find('circle').length).toBe(1);
  });
  describe('getHalfCircleStyle', () => {
    it('returns expected style object with given props', () => {
      const styleResult = getHalfCircleStyle({
        lineWidth: 20,
        color: 'grey'
      });
      expect(styleResult).toEqual({
        fill: 'none',
        stroke: 'grey',
        strokeWidth: 20
      });
    });
    it('returns default style object when props are empty', () => {
      const styleResult = getHalfCircleStyle({});
      expect(styleResult).toEqual({
        fill: 'none',
        stroke: 'black',
        strokeWidth: 5
      });
    });
  });
  describe('getHalfCircleMeasurements', () => {
    it('returns returns expected measurements with given props', () => {
      const measurementsResult = getHalfCircleMeasurements(400, 20);
      expect(measurementsResult).toEqual({
        cutoffWidth: 440,
        cutoffHeight: 220,
        circleX: 220,
        circleY: 220,
        circleRadius: 200
      });
    });
    it('returns returns default measurements when props are empty', () => {
      const measurementsResult = getHalfCircleMeasurements();
      expect(measurementsResult).toEqual({
        cutoffWidth: 210,
        cutoffHeight: 105,
        circleX: 105,
        circleY: 105,
        circleRadius: 100
      });
    });
  });
});
