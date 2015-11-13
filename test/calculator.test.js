'use strict';
var chai = require('chai');


var assert = chai.assert;
chai.expect;

var add = require('../controllers/tdd-add');

describe.only  ('testing add method', function () {
	
	it ('should return 0 when input is empty', function () {

		// setup
		var input =''; 
		
		// expectation
		var expected = 0;
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown


	});	

	it ('should return the number itself if the input is single number.example input(\'5\') result :5', function () {

		// setup
		var input = '5';

		// expectation

		var expected = 5;

		// action / execution

		var result = add(input);

		// validation

		assert.equal(result,expected);

		// teardown

	});

	it ('should return the sum of the inputs if there are two inputs. example input(\'5\',\'2\') result :7 ', function () {

		// setup
		var input = '5,2';

		// expectation
		var expected = 7;

		// action / execution
		var result = add(input);

		// validation
		assert.equal(result,expected);

		// teardown

	});

	it ('should return the sum of inputs when the amount of inputs is unknown', function () {

		// setup
		var input ='1,2,3,4,5,6,7,8,9,12'; 
		
		// expectation
		var expected = 57;
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown


	});	

	it ('should return the sum of inputs when the amount of inputs is unknown and there is a new line between numbers', function () {

		// setup
		var input ='1,2\n3,4,5,6,7\n8,9\n11\n'; 
		
		// expectation
		var expected = 56;
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown


	});	

	it ('should return the sum of inputs when the amount of inputs is unknown and there are different delimiters between numbers', function () {

		// setup
		var input ='//;\n1;2;3;4;5;6;7;8;9;11'; 
		
		// expectation
		var expected = 56;
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown


	});	

	it ('should return an exception when a negative number is given ', function () {

		// setup
		var input ='//;\n1,-2\n3,-4,5,6,7\n8,9\n11\n'; 
		
		// expectation
		var expected = 'negative numbers are not allowed: -2,-4';
		
		// action / execution 
		try {
			var result = add(input);
			assert.fail(null, null, 'Negatives numbers error not thrown');
		}
		catch (err) {

			// validation
			assert.equal(err.message, expected);
		}

		
		// teardown


	});	

	it ('should ignore the numbers which are greater than 1000. example: addimg 1002 to 2 will give 2', function () {

		// setup
		var input ='2,3,1002,1004,2,250,3'; 
		
		// expectation
		var expected = '260';
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown

	});	

	it ('should return the sum of inputs when the amount of inputs is unknown and there are different lengths of delimiters between numbers', function () {

		// setup
		var input ='//[;;;;]\n1;;;;2;;;;3;;;;4;;;;5;;;;6;;;;7;;;;8;;;;9;;;;11'; 
		
		// expectation
		var expected = 56;
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown


	});	



	it('should return the sum of inputs when the amount of inputs is unknown and there are different kind of delimiters between numbers', function () {

		// setup
		var input ='//[;][%][&]\n1;2%3&4&5&6;7%8;9&11'; 
		
		// expectation
		var expected = 56;
		
		// action / execution 
		var result = add(input);
		
		// validation
		assert.equal(result,expected);
		
		// teardown


	});	

	it ('should return eror on ', function () {

		// setup
		var input ='//[;][a][&]\n1;%%2&%3&4&&5&6;7a9&111'; 
		
		var expected = 'This kind of delimiter is not existed';
		
		// action / execution 
		try {
			var result = add(input);
			assert.fail(null, null, 'Incorrect delimiter error not thrown');
		}
		catch (err) {

			// validation
			assert.equal(err.message, expected);
		}


	});	




});