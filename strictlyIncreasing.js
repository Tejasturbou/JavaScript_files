var sequence =  [1, 3, 2]; var newArray; var answer;

checkStrictlyIncreasing(sequence);

function checkStrictlyIncreasing(array) {
	for (var i = array.length - 1; i > 0; i--){
		array.splice(i, 1);
		newArray = array;
		checker(newArray);
		if (answer) {
			return answer;
		}
	}
	
	return answer;
} 

function checker(values) {
	var count = values.length - 1; var check = true;

	while (count > 0) {
		if (values[count] > values[count - 1]) {
			check = check*check;
		} else {
			check = check*check;
		}
		count -= 1;
	}

	if (check) {
		answer = true;
	} else {
		answer = false;
	}

}