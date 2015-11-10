'use strict';

function add(input){

	var sumOfInputs = 0;
	


		var replacedInput = input.replace(/\n|;|\/|[a-zA-Z\s]/g, ",");

		var inputNumbers = replacedInput.split(",");
		var negatives = [];

		for(var i = 0; i < inputNumbers.length; i++){
			
			if(isNegative(inputNumbers[i])){
				negatives.push(inputNumbers[i]);
			}
				
			sumOfInputs += Number(inputNumbers[i]);
		}

		if(negatives.length !== 0 ){

			throw new Error("negative numbers are not allowed: " + negatives);			
		}
		
		return sumOfInputs;
	
	


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
