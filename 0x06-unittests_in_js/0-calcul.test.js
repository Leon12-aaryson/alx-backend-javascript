const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should round positive numbers correctly', function () {
    assert.equal(calculateNumber(3.7, 2.1), 6);
  });
  it('should round negative numbers correctly', function () {
    assert.equal(calculateNumber(-3.7, -2.1), -6);
  });
  it('dealing with the zero case', function () {
    assert.equal(calculateNumber(0.0, 0.0), 0);
  });
  it('should work with whole numbers', function () {
    assert.equal(calculateNumber(2, 3), 5);
  });
});