import React from 'react';
import {
  getHalfCircleStyle,
  getHalfCircleMeasurements
} from '../src/halfCircle.component';
import HalfCircleComponent from '../src/halfCircle.component';

describe('<HalfCircleComponent />', () => {

  // TODO: mount and test react component
  it('imports HalfCircle component', () => {
    expect(HalfCircleComponent).toBeTruthy();
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
    it('returns returns expected mea§surements with given props', () => {
      const measurementsResult = getHalfCircleMeasurements(200, 20);
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
