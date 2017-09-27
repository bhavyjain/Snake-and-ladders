var player1= 0;
var player2= 0;
var flag=0;

var snakes=[
    {head:36,tail:14},
    {head:48,tail:19},
    {head:56,tail:23},
    {head:59,tail:2},
    {head:78,tail:35},
    {head:92,tail:17}
]

var ladders=[
    {bottom:3,top:32},
    {bottom:10,top:56},
    {bottom:17,top:38},
    {bottom:25,top:80},
    {bottom:45,top:90},
    {bottom:57,top:85}
]

function randomdie(){
    randomnum = Math.floor((Math.random()*6)+1);
    if(flag==0)
    {
        console.log("Player1 Rolled a " + randomnum);
    }
    else
    {
        console.log("Player2 Rolled a " + randomnum);
    }
    return randomnum;
}

function updatepos(){
    if (flag==0)
    {
        player1= player1+ randomdie();
        console.log("player 1 is now at" + player1);
           for(i=0;i<snakes.length;i++)
           {
            if (player1==snakes[i].head)
            {   console.log("player 1 got bit by a snake");
                player1=snakes[i].tail;
                console.log("player1 is now at" + player1);
            }
           }
           for(i=0;i<ladders.length;i++)
           {
            if(player1==ladders[i].bottom)
            {   console.log("player1 climbed a ladder");
                player1=ladders[i].top;
                console.log("player1 is now at" + player1);
            }
           }flag=1;
    }
     else
    {
        player2= player2+ randomdie();
        console.log("player2 is now at" + player2);
        for(i=0;i<snakes.length;i++)
        {
         if (player2==snakes[i].head)
         {   console.log("player2 got bit by a snake");
             player2=snakes[i].tail;
             console.log("player2 is now at" + player2);
         }
        }
        for(i=0;i<ladders.length;i++)
        {
         if(player2==ladders[i].bottom)
         {   console.log("player2 climbed a ladder");
             player2=ladders[i].top;
             console.log("player2 is now at" + player2);
         }
        }flag=0;
    }

}



function start(){
    for(i=0; player1<100 && player2<100; i++)
    {
     updatepos();
    }

}
