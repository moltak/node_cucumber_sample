'use strict';

var request = require('supertest');

var app = require('../../app.js');

function World() {
	this.request = function () {
		return request(app);
	}
}

module.exports = function() {
	this.World = World;
};