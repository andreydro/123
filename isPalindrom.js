// right code 

function isPalindrom(str) {
    if (str[0] == str[str.length - 1]) {
        return true;
    } else if (str === "") {
        return true;
    } else {
        return false;
    }
}
isPalindrom("ASasdasd");


// the same task in less then 50 symbols (in progress...)

function isPalindrom(s) {
    var r = s.split("").reverse().join("");
    return r == s || s == "" ? 1 : 0;
}

