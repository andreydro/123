function truncate(str, maxlength) {
    if (str.length > maxlength) {
        var newStr = str.substr(0, maxlength - 3);
        return newStr + "...";
    }
    return str;
}