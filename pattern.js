function lines (characters) {

	var spaces = 3; var count; var reversed; var initialCount;
	count = characters.split(' ').length - 1;     									// 6
	initialCount = count;															// 6

	reversed = characters.split(' ').slice(0, count).reverse(' ').join(' ');		// (F,E,D,C,B,A)
	var pattern = (characters + ' ' + reversed + '\n');								// (A B C D E F G F E D C B A)
	characters = characters.split(' ').slice(0, count).join(' '); 					// (A,B,C,D,E,F)

	for (var i = 0; i <= initialCount - 1; i++) {		
		count -= 1;																	
		pattern += (characters + ' '.repeat(spaces) + reversed + '\n');				
		characters = characters.split(' ').slice(0, count).join(' ');
		reversed = characters.split(' ').reverse().join(' ');
		spaces += 4;
	}		

	console.log(pattern);

}

lines('A B C D E F G');   //YOU CAN PASS ANY NUMBER OF CHARACTERS