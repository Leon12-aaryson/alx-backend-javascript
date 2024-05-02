const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('should respond with the correct status code', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) {
        done(error); // Call done with error if there's an error
        return;
      }
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should have the correct content of the body', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct Content-Type', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('should have the correct Content-Length', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
