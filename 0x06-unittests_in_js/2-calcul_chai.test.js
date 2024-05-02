const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber', function () {
  it('should correctly calculate the sum of two numbers', function () {
    expect(calculateNumber('SUM', 3.7, 2.1)).to.equal(6);
  });

  it('should correctly calculate the subtraction of two numbers', function () {
    expect(calculateNumber('SUBTRACT', -3.7, -2.1)).to.equal(-2);
  });

  it('should correctly calculate the division of two numbers', function () {
    expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
  });

  it('should return "Error" when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });

  it('should work correctly with whole numbers', function () {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });

  it('should round numbers before performing operations', function () {
    expect(calculateNumber('SUM', 3.7, 2.1)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 3.7, 2.1)).to.equal(2);
    expect(calculateNumber('DIVIDE', 3.7, 2.1)).to.equal(2);
  });

  it('should handle negative numbers correctly', function () {
    expect(calculateNumber('SUM', -3.7, -2.1)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', -3.7, -2.1)).to.equal(-2);
    expect(calculateNumber('DIVIDE', -10, -5)).to.equal(2);
  });

  it('should handle mixed types of numbers correctly', function () {
    expect(calculateNumber('SUM', -3.7, 2)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3, -2.1)).to.equal(5);
    expect(calculateNumber('DIVIDE', 10, -5)).to.equal(-2);
  });
});
