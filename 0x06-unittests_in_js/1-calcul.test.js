const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should correctly calculate the sum of two numbers', function () {
    assert.equal(calculateNumber('SUM', 3.7, 2.1), 6);
  });

  it('should correctly calculate the subtraction of two numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -2.1), -2);
  });

  it('should correctly calculate the division of two numbers', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
  });

  it('should return "Error" when dividing by zero', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('should work correctly with whole numbers', function () {
    assert.equal(calculateNumber('SUM', 2, 3), 5);
  });

  it('should round numbers before performing operations', function () {
    assert.equal(calculateNumber('SUM', 3.7, 2.1), 6);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 2.1), 2);
    assert.equal(calculateNumber('DIVIDE', 3.7, 2.1), 2);
  });

  it('should handle negative numbers correctly', function () {
    assert.equal(calculateNumber('SUM', -3.7, -2.1), -6);
    assert.equal(calculateNumber('SUBTRACT', -3.7, -2.1), -2);
    assert.equal(calculateNumber('DIVIDE', -10, -5), 2);
  });

  it('should handle mixed types of numbers correctly', function () {
    assert.equal(calculateNumber('SUM', -3.7, 2), -2);
    assert.equal(calculateNumber('SUBTRACT', 3, -2.1), 5);
    assert.equal(calculateNumber('DIVIDE', 10, -5), -2);
  });
});
