function makeCounter() {
	var currentCount = 1;

	function counter() {
		return currentCount++;
	}

	counter.set = function(value) {
		currentCount = value;
	};

	counter.reset = function() {
		currentCount = 1;
	};
	return counter;
}

var counter = makeCounter();

console.log(counter());
console.log(counter());
counter.set(5);
console.log(counter());