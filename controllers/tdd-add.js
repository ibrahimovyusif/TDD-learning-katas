'use strict';

var util = require('util');

/**
 * Regular expression to find input with //. 
 * Example: //;\n1;2;3
 */
var REGEX_SINGLE_DELIMITER = new RegExp(/\/\/[^\[](\W|\w)*\s[^\]](\d|\D)*/);


/**
 * Regular expression to find input with // and brackets. 
 * Example: //[;]\n1;2;3
 */
// var REGEX_MULTIPLE_DELIMITERS = new RegExp(/\/\/\[(\W|\w)*\]\s(\d|\D)*/);
var REGEX_MULTIPLE_DELIMITERS = new RegExp(/\/\/\[(\W|\w)*\]*\s(\d|\D)*/);


var MAXIMUM_NUMBER_VALUE = 1000;
var DEFAULT_DELIMITER = ',';

function add(input){

	var sumOfInputs = 0;
	var delimiter = DEFAULT_DELIMITER;
	
	var inputNumbers;
	var negatives = []; 

	var inputWithoutBrackets = input; 
	
	if(REGEX_SINGLE_DELIMITER.test(input)){
	
		//replace other characters with empty space except delimiters	
		 delimiter = input.replace(/\/\/|\s(\d|\D)*/gi, '');	
	}
	else if(REGEX_MULTIPLE_DELIMITERS.test(input)){

		//replace other characters with empty space except delimiters
		delimiter = input.replace(/\/\/\[|\]\[|\]\s(\d|\D)*/gi, '');
		console.log(delimiter);
		
		// inputWithoutBrackets = input.replace(/\[|\]/gi, '');
		inputWithoutBrackets = input.replace(/(\w|\W)*\s/gi, '')
	}

	inputNumbers = splitToNumber(inputWithoutBrackets, delimiter);

	inputNumbers.forEach(function (num) {

		//if bigger than MAXIMUM_NUMBER_VALUE make equal to 0
		if(num >= MAXIMUM_NUMBER_VALUE){
			num = 0;
		}
		
		//find and push negative numbers to array
		if(isNegative(num)){
			negatives.push(num);
		}

		sumOfInputs += Number(num);
	});

	//if there is negative numbers throw error
	if(negatives.length !== 0 ){

		throw new Error("negative numbers are not allowed: " + negatives);			
	}

	return sumOfInputs;
}

//makes array from string
function splitToNumber(stringOfNumbers, delimiter) {

	var regexString = ['\n|\/|', delimiter].join('');
	console.log(regexString); 
	var regex = new RegExp(regexString, "g");
	var replacedInput = stringOfNumbers.replace(regex, ',');

	return replacedInput.split(',');
}

//checks if the number is negative
function isNegative(num){
	if(num < 0){
		return true;
	}
}

//checks if the var is a number
function isNumber(num) {

	return !(isNaN(num));
};


module.exports = add;
