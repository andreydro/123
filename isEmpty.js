function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}

var schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

alert(isEmpty(schedule)); // false;