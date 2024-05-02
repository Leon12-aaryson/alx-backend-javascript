const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('should respond with the correct status code', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should have the correct content of the body', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct Content-Type', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('should have the correct Content-Length', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      if (error) return done(error);
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should have correct status code with numeric id parameter', (done) => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      done(error);
    });
  });

  it('should have correct result with numeric id parameter', (done) => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
      done(error);
    });
  });

  it('should have correct status code when non-numeric id parameter is provided', (done) => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done(error);
    });
  });

  it('should return the correct content-type given valid id parameter', (done) => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done(error);
    });
  });

  it('should return the correct content in the body when non-numeric id is provided', (done) => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(body).to.contain('Cannot GET /cart/hello');
      done(error);
    });
  });

  it('should return the correct content length', (done) => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('27');
      done(error);
    });
  });
});