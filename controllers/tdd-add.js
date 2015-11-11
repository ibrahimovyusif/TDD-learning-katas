'use strict';

var util = require('util');

function add(input){

	var sumOfInputs = 0;
	var delimiter = ',';
	
	var inputNumbers;
	var negatives = [];
	
	//
	if(input[0] === '/' && input[1] === '/'){
		
		delimiter = input[3];
	}

	inputNumbers = splitToNumber(input, delimiter);

	inputNumbers.forEach(function (num) {
		if(num >=1000){
			num = 0;
		}

		if(isNegative(num)){
			negatives.push(num);
		}

		sumOfInputs += Number(num);
	});

	if(negatives.length !== 0 ){

		throw new Error("negative numbers are not allowed: " + negatives);			
	}



	return sumOfInputs;
}

function splitToNumber(stringOfNumbers, delimiter) {

	var regexString = ['\n|\/|', delimiter].join(''); 
	var regex = new RegExp(regexString, "g");
	var replacedInput = stringOfNumbers.replace(regex, ',');

	return replacedInput.split(',');
}

function isNegative(num){

	if(num < 0){
		return true;
	}
}

function isNumber(num) {

	return !(isNaN(num));
};

module.exports = add;
