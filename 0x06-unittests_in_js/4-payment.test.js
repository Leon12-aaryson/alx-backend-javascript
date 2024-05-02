const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  let stubbedCalculateNumber = null;

  beforeEach(() => {
    stubbedCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  it('should call Utils.calculateNumber with the two arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stubbedCalculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should call Utils.calculateNumber once', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stubbedCalculateNumber.calledOnce).to.be.true;
  });

  it('should log the correct sum parameter to the console', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
    console.log.restore();
  });

  afterEach(() => {
    sinon.restore();
  });
});
