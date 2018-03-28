var users = [{
    name: "Вася",
    surname: "Иванов",
    age: 20
}, {
    name: "Петя",
    surname: "Чапаев",
    age: 25
}, {
    name: "Маша",
    surname: "Медведева",
    age: 18
}];

function byFiled(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byFiled("name"));
users.forEach(function(user) {
    console.log(user.name);
});

users.sort(byFiled("age"));
users.forEach(function(user) {
    console.log(user.name);
});