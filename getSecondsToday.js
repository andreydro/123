function getSecondsToday() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today;
    return Math.floor(diff / 1000);
}

console.log(getSecondsToday());