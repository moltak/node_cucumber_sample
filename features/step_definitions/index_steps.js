'use strict';

var should = require('should');

module.exports = function () {
	var res = '';
	this.data = '';
	this.World();

	this.Given(/^User$/, () => {
		// empty function
	});

	this.When(/^User types index page on the web browser$/, (done) => {
		this.request()
			.get('/')
			.expect(200)
			.end((err, result) => {
				should.not.exist(err);
				res = result;
				done();
			});
	});

	this.Then(/^User can see BDD text$/, () => {
		res.text.should.equal('BDD');
	});
};