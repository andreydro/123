function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    if (lowerStr.indexOf("viagra") !== -1 || (lowerStr.indexOf("xxx") !== -1)) {
        return true;
    } else {
        return false;
    }
}