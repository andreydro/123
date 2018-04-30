var expr, res;

while (true) {
	expr = prompt("Insertgjnj expresion?", "2-");
	if (expr == null) break;

	try {
		res = eval(expr);
		if (isNaN(res)) {
			throw new Error("Result is undefined");
		}

		break;
	} catch (e) {
		console.log("Error: " + e.message + ", repeat insert")
	}
}

console.log(res);