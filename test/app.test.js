const assert = require('assert');
const http = require('http');
const request = require('request'); // Include request if not already imported
const app = require('../index');
let server;

describe('App Tests', function () {
  before(function (done) {
    // Start the server on a different port for testing
    server = http.createServer(app);
    server.listen(3001, done);
  });

  it('should return 200 for the home route', function (done) {
    request('http://localhost:3001', function (error, response, body) {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  after(function (done) {
    server.close(done); // Ensure server is closed after tests
  });
});
