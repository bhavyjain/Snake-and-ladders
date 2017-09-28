count=0;
function rollDice() {
    var playing_player = {};
    var cur_index=count%players.length;
    playing_player=players[cur_index];
    console.log(playing_player.name + " is playing at " + playing_player.pos);
    diePoints = getRandomNumber();
    console.log(playing_player.name + " got " + diePoints);
    playing_player.pos += diePoints;
    if (playing_player.pos > sucess) {
        console.log("invalid move sorry...");
        playing_player.pos -= diePoints;
        return true;
    }
    console.log(playing_player.name + " goes to " + playing_player.pos);
    playing_player.pos = checkPosition(playing_player);
    var str="";
    for(var i=0;i<players.length;i++){
        str+=players[i].name+":"+players[i].pos+" ";
    }
    console.log(str);
    return checkSucess(playing_player);
}
function start() {
    while (rollDice() == true)
        count++;
}
