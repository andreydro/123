function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(" ") : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(" ");
}

var obj = {
    className: "open menu"
}

addClass(obj, "new");
addClass(obj, "open");
addClass(obj, "me");
console.log(obj.className);