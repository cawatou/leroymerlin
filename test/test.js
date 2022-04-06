const app       = require('../app');
const request   = require('supertest');
const assert    = require('chai').assert;
const should    = require('chai').should();

describe('GET /api/v1/test', () => {
	it('returns a json', (done) => {
		request(app)
			.get('/api/v1/test')
			.expect('Content-Type', /application\/json/)
			.expect(200, {"test": "OK"}, done)
	})

	it('result should be include test key', (done) => {
		request(app)
			.get('/api/v1/test')
			.end( (err, res) => {
				assert.isObject(res, 'res is object');
				res['_body'].should.have.property('test');
				if (err) return done(err);
				done();
			});
	})
})

describe('GET /alive', () => {
	it('returns a json', (done) => {
		request(app)
			.get('/alive')
			.expect('Content-Type', /application\/json/)
			.expect(200, {"alive": "OK"}, done)
	})

	it('result should be include alive key', (done) => {
		request(app)
			.get('/alive')
			.end( (err, res) => {
				assert.isObject(res, 'res is object');
				res['_body'].should.have.property('alive');
				if (err) return done(err);
				done();
				process.exit(0);
			});
	})
})