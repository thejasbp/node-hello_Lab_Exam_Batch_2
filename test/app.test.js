const assert = require('assert');
const app = require('../app');  // Assuming app.js is the entry point of the app
const app = require('../index');

describe('App Tests', function () {
  it('should return 200 for the home route', function (done) {
    app.listen(3000, () => {
      request('http://localhost:3000', function (error, response, body) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });
});
