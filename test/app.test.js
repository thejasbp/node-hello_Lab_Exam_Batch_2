const assert = require('assert');
const http = require('http');  // Add this for making HTTP requests
const app = require('../index');  // Ensure this path is correct

describe('App Tests', function () {
  let server;

  // Start the server before the tests
  before(function (done) {
    server = app.listen(3000, done);
  });

  // Close the server after the tests
  after(function (done) {
    server.close(done);
  });

  it('should return 200 for the home route', function (done) {
    http.get('http://localhost:3000', function (response) {
      assert.equal(response.statusCode, 200);
      done();
    });
  });
});
