
function rollDice() {
    var player = {};
    if (flg == 0) {
        player.pos = a;
        player.name = "A";
        flg = 1;
    }
    else {
        player.pos = b;
        player.name = "B";
        flg = 0;
    }
    console.log(player.name + " is playing at " + player.pos);
    diePoints = getRandomNumber();
    console.log(player.name + " got " + diePoints);
    player.pos += diePoints;
    if (player.pos > sucess) {
        console.log("invalid move sorry...");
        //  player.pos -= diePoints;
        return true;
    }
    console.log(player.name + " goes to " + player.pos);
    player.pos = checkPosition(player);
    if (flg == 1) {
        a = player.pos;
    }
    else {
        b = player.pos;
    }
    console.log("A:" + a + " B:" + b);
    return checkSucess(player);
}
function start() {
    while (rollDice() == true);
}
