var flg = 0;
var sucess = 50;
Player = function (name, pos) {
    this.name = name;
    this.pos = pos;
}
player1=new Player("A",1);
player2=new Player("B",1);
var newSnL=[];
var SnakesnLadders = [
    {
        start: 1,
        end: 7
    },
    {
        start: 2,
        end: 20
    },
    {
        start: 3,
        end: 21
    },
    {
        //snake...
        start: 4,
        end: 1
    },
    {
        //snake...
        start: 5,
        end: 1
    },
    {
        //snake...
        start: 6,
        end: 1
    },
    {
        start: 4,
        end: 15,
    },
    {
        start: 20,
        end: 27
    },
    {
        //snake...
        start: 40,
        end: 10
    }

];

function convert(){
    for(i=0; i<SnakesnLadders.length;i++)
    {
        newSnL[SnakesnLadders[i].start]=SnakesnLadders[i];
    }
    console.dir(newSnL);
}
function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
}
/*function checkPosition(player) {

    for (var i = 0; i < SnakesnLadders.length; i++) {
        //console.log(player.pos + "  " + SnakesnLadders[i].start);
        if (SnakesnLadders[i].start == player.pos) {
            snl = SnakesnLadders[i];
            if (snl.start > snl.end)
                console.log("Oops a snake got " + player.name);
            else
                console.log("Wow " + player.name + " has found a ladder...");
            console.log(player.name + " goes to " + snl.end);
            return snl.end;
        }
    }
    return player.pos;
}*/

function posupdate(player){
    if(newSnL[player.pos]==undefined){
        return;
    }
    else{
        if(newSnL[player.pos].start>newSnL[player.pos].end)
            console.log("Oops a snake got " + player.name);
         else
            console.log("Wow " + player.name + " has found a ladder...");
        player.pos=newSnL[player.pos].end;
    }
    console.log(player.name + "is now at" + player.pos)
}
function checkSucess(player) {
    if (player.pos == sucess) {
        console.log(player.name + " has won....");
        return false;
    }
    return true;
}