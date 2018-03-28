function getSecondsToTomorrow() {
    var now = new Date();
    var tommorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = tommorrow - now;
    return Math.floor(diff / 1000);
}

console.log(getSecondsToTomorrow());