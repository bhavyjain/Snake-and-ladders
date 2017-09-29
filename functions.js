var flg = 0;
var sucess = 50;
Player = function (name, pos) {
    this.name = name;
    this.pos = pos;
    this.next_snl_index=0;
}
players=[new Player("A",1),new Player("B",1)]
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
        start: 8,
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
function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
}
function checkPosition(player) {
    for (var i = player.next_snl_index; i < SnakesnLadders.length; i++) {
        var snl = SnakesnLadders[i];
        if(snl.start>player.pos){
            player.next_snl_index=i;
            return; 
        }
        if (snl.start == player.pos) {
            if (snl.start > snl.end){
                console.log("Oops a snake got " + player.name);
                i=0;
            }
            else
                console.log("Wow " + player.name + " has found a ladder...");
                
            console.log(player.name + " goes to " + snl.end);
            player.pos=snl.end;
           
        }
    }
    player.next_snl_index=SnakesnLadders.length;
}
function checkSucess(player) {
    if (player.pos >= sucess) {
        console.log(player.name + " has won....");
        return false;
    }
    return true;
}