
function rollDice() {
    var button = document.getElementById("roll");
    var player = {};
    player.name = button.value;

    if (button.value == "A") {
        player.pos = a;
    }
    else {
        player.pos = b;
    }
    console.log(player.name + " is playing at " + player.pos);
    diePoints = getRandomNumber();
    console.log(player.name + " got " + diePoints);
    player.pos += diePoints;
    if (player.pos > sucess) {
        console.log("invalid move sorry...");
        player.pos -= diePoints;
    }
    else {
        console.log(player.name + " goes to " + player.pos);
        player.pos = checkPosition(player);
    }
    if (button.value == "A") {
        a = player.pos;
        button.value = "B";
    }
    else {
        b = player.pos;
        button.value = "A";
    }
    console.log("A:" + a + " B:" + b);
    checkSucess(player);
}

