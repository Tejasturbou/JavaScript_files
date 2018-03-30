function pythaTriplets(length) {
	var a; var b; var c;
	for (var i = 1; i <= length; i++) {
		a = i; 
		for (var j = 1; j <= length; j++) {
			b = j;
			c = Math.sqrt(a*a + b*b);
			if (Number.isInteger(c) && c <= length && b >= a) {
				console.log(a,b,c);
			}
		}
	}
}

pythaTriplets(30);