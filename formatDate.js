function formatDate(date) {
    var diff = new Date() - date;

    if (diff < 1000) {
        return "только что";
    }

    var sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + " сек. назад";
    }

    var min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + " мин. назад"
    }

    var d = date;
    d = [
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes()
    ];

    for (var i = 0; i < d.length; i++) {
        d[i] = d[i].slice(-2);
    }

    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

console.log(formatDate(new Date(new Date - 1))); // только что
console.log(formatDate(new Date(new Date - 30 * 1000))); // 30 сек. назад
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // 5 мин. назад
console.log(formatDate(new Date(new Date - 86400 * 1000)));



function anotherFormatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = "0" + yy;

    return dd + "." + mm + "." + yy;
}

var d = new Date(2014, 0, 30);
console.log(anotherFormatDate(d));