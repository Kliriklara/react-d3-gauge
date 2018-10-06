# react-d3-gauge
### A Gauge Visualisation built with Webpack and React

This repository contains the prototype of a gauge chart created with React.

### Development

- Install dependencies with `npm install`.
- Build the project with `npm run build`.
- Run test with `npm test` or `npm run watch:test`. The test framework used is Jasmine, executed with Karma. React components are tested with [Enzyme](https://github.com/airbnb/enzyme).
- To run all commands, you can run the build script `sh build.sh`.

The code is located in the `src` folder and tests are located inside the `spec` folder. Tests need to be named `{name}.spec.js` to be included in the test run.
Entry point of the app is `src/app.js`.

### Current State

The project currently contains the axis for the gauge chart and the data labels.

### Future Work

Future features to be implemented are:

- a component displaying the actual meter
- component lifecyrcles so they update once props change
- more in depth testing of react components with [Enzyme](https://github.com/airbnb/enzyme)
- a currency symbol lookup
