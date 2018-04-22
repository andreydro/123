function printNumbersTimeout() {
	var i = 1;
	var timerId = setTimeout(function go() {
		console.log(i);
		if (i < 20) setTimeout(go, 100);
		i++;
	},100);
}

printNumbersTimeout();