function sumArgs() {
	return [].reduce.call(arguments, function(a,b) {
		return a + b;
	});
}

console.log(sumArgs(4,5,6));