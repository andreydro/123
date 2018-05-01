function FormatError(message) {
    this.name = "FormatError";

    this.message = message;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
    }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("Formating error");

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof SyntaxError);