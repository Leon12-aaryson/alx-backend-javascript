const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('round positive numbers correctly', function () {
    assert.equal(calculateNumber(3.7, 2.1), 6);
  });
  it('round negative numbers correctly', function () {
    assert.equal(calculateNumber(-3.7, -2.1), -6);
  });
  it('dealing with the zero case', function () {
    assert.equal(calculateNumber(0.0, 0.0), 0);
  });
  it('work with whole numbers', function () {
    assert.equal(calculateNumber(2, 3), 5);
  });
});