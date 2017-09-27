
function rollDice() {
    var player = {};
    if (flg == 0) {
        player = player1;
        //player.name = "A";
        flg = 1;
    }
    else {
        player = player2;
        //player.name = "B";
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
        player1 = player;
    }
    else {
        player2 = player;
    }
    console.log(player1.name+":" + player1.pos + player2.name+":" + player2.pos);
    return checkSucess(player);
}
function start() {
    while (rollDice() == true);
}
