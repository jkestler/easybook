const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:5001/bookmarks/';

describe('routes : bookmarks', () => {

  describe('GET /bookmarks', () => {

    it('should return a status code 200', (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

  });

});