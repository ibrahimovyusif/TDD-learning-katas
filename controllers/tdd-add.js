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
var REGEX_MULTIPLE_DELIMITER = new RegExp(/\[(\W|\w)(.*?)\]\s(\d|\D)*/);

var MAXIMUM_NUMBER_VALUE = 1000;
var DEFAULT_DELIMITER = ',';

function add(input){

	var sumOfInputs = 0;
	var delimiter = DEFAULT_DELIMITER;
	var inputNumbers;
	var negatives = []; 
	var inputWithoutBrackets= input; 

	var splittedDelimiters;
	var symbolsBetweenNumbers;
	

	if(REGEX_SINGLE_DELIMITER.test(input)){
	
		//replace other characters with empty space except delimiters	
		 delimiter = input.replace(/\/\/|\s(\d|\D)*/gi, '');	
	}

	else if(REGEX_MULTIPLE_DELIMITER.test(input)){

	 	delimiter = matchDelimiters(input);
	 	inputWithoutBrackets = input.split('\n')[1];
console.log(inputWithoutBrackets);
	 	// Split on numbers to keep only the symbols
	 	symbolsBetweenNumbers = inputWithoutBrackets.split(/\d/);

	 	var filteredSymbolsBetweenNumbers = [];

	 	symbolsBetweenNumbers.forEach(function(el){
	          if(el !=='')
	          {
	          	filteredSymbolsBetweenNumbers.push(el);
	          }
	 	});

	 	console.log('test',filteredSymbolsBetweenNumbers);
	 	// Replace non-numeric characters with ','
	 	inputWithoutBrackets = inputWithoutBrackets.replace(/\D/g,',');

		filteredSymbolsBetweenNumbers.forEach(function(delValue){
			
			// Checks if the symbols between numbers are not delimeter and to throw error
			if (delimiter.indexOf(delValue) ===-1) {

				throw new Error("This kind of delimiter is not existed");
			}
	
		});
	}

	// Split numbers according to delimiter
	inputNumbers = splitToNumber(inputWithoutBrackets, delimiter);

	//loop inside the numbers
	inputNumbers.forEach(function (num) {

		//if bigger than MAXIMUM_NUMBER_VALUE make equal to 0
		if(num >= MAXIMUM_NUMBER_VALUE){
			num = 0;
		}
		
		//find and push negative numbers to array
		if(isNegative(num)){
			negatives.push(num);
		}

		// finds the sum Of Input Numbers
		sumOfInputs += Number(num);
	});

	//checks if there are negative numbers throw error
	if(negatives.length !== 0 ){

		throw new Error("negative numbers are not allowed: " + negatives);			
	}

	return sumOfInputs;
}

function matchDelimiters(stringOfNumbers) {
	//find the given delimiters with brackets
	var delimiterWithBrackets = stringOfNumbers.match(REGEX_MULTIPLE_DELIMITER)[0].split('\n')[0];

	// return the delimiters without brackets
	return delimiterWithBrackets.split('][').map(function (del) {
		return del.replace('[', '').replace(']', '');
	});

}

//makes array from string
function splitToNumber(stringOfNumbers, delimiter) {

	var regexString = ['\n|\/|', delimiter].join('');
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
