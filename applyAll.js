function sum() {
	return [].reduce.call(arguments, function(a,b) {
		return a + b;
	});
}

function mul() {
	return [].reduce.call(arguments, function(a,b) {
		return a * b;
	});
}

function applyAll(func) {
	return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(sum, 1,2,3));
console.log(applyAll(mul, 2,3,4));
console.log(applyAll(Math.max, 2,-2,3));
console.log(applyAll(Math.min, 2,-2,3));