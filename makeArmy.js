function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = function me() {
            console.log(me.i);
        };
        shooter.i = i;
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();

army[0]();
army[1]();
army[2]();
army[3]();