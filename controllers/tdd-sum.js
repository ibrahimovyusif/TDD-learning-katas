'use strict';

function sum(input1, input2) {
	var inputNum1 = convertToNatural(input1);
	var inputNum2 = convertToNatural(input2);

	return inputNum1 + inputNum2;
}

function convertToNatural(input) {
	var inputNum = 0;
	if (isNatural(input)) {
		inputNum = Number(input);
	}

	return inputNum;
}

function isNatural(num) {
	return !(isNaN(num) || num % Math.round(num) !== 0 || num <= 0 );
}

function sumOfInputs(input1, input2){

	return Number(input1) + Number(input2);
}

module.exports = sum;
