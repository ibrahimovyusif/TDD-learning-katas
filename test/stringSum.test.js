'use strict';
var chai = require('chai');

var assert = chai.assert;
chai.expect;



var sum = require('../controllers/tdd-sum');


describe('testing sum method', function () {
	
	it ('should return 0 when both input numbers are empty strings', function () {

		// setup
		var input1 = '';
		var input2 = '';

		// expectation
		var expected = 0;

		// action / execution
		var result = sum(input1, input2);

		// validation
		assert.equal(result, expected);

		// teardown


	});

	it('should return 0 when both input numbers are not natural numbers', function () {
		// setup
		var input1 = '-7.asdasda5';
		var input2 = '8.1';

		// expectation
		var expected = 0;

		// action / execution
		var result = sum(input1, input2);

		// validation
		assert.equal(result, expected);
	

		// teardown

	});

	it  ('should return one of the inputs natural number if the other one is empty', function () {

		// setup
		var input1 = '';
		var input2 = '3';

		// expectation
		var expected = '3';

		// action / execution
		var result = sum(input1, input2);
		// validation
		assert.equal(result, expected);

		// teardown
	});

	it ('should return one of the inputs natural numbers if the other one is not natural' , function () {
				// setup
		var input1 = '5.6';
		var input2 = '3';

		// expectation
		var expected = '3';

		// action / execution
		var result = sum(input1, input2);
		// validation
		assert.equal(result, expected);
	});

	it ('should return sum of the both inputs when both of then are natural numbers', function () {
		var input1 = '5';
		var input2 = '3';

		// expectation
		var expected = '8';

		// action / execution
		var result = sum(input1, input2);
		// validation
		assert.equal(result, expected);
	});
}); 