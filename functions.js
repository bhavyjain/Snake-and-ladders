var start=0;
var end=100;
var flag=0;
var a=0, b=0;
var oldpos=0;
function player()
{
    if(flag==0)
    {
        console.log("Player A");
        oldpos=a;
        a=a+Roll();
        if(a>100)
        {
            console.log("You can't move.")
            a=oldpos;
        }
        flag=1;
        return a;
    }
    else
    {
        console.log("Player B");
        b=b+Roll();
        if(b>100)
        {
            console.log("You can't move.")
            b=oldpos;
        }
        flag=0;
        return b;
    }
}
function obs(x)
{
    if(flag==0)
    {
        b=x;
    }
    else
    {
        a=x;
    }
}
function Roll()
{
    var numb=GenerateRandomNumber();
    console.log("You got a "+numb);
    return numb;
}
function GenerateRandomNumber()
{
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
function play()
{
    var cur_pos=player();
    if(cur_pos==end)
    {
        console.log("You won!");
    }
    else
    {
    switch(cur_pos)
    {
        case 8:cur_pos = 36; obs(36);
        console.log("Its a ladder. You're going up!")
        break;
        case 28:cur_pos = 50; obs(50);
        console.log("Its a ladder. You're going up!")
        break;
        case 44:cur_pos = 87; obs(87);
        console.log("Its a ladder. You're going up!")
        break;
        case 67:cur_pos = 92; obs(92);
        console.log("Its a ladder. You're going up!")
        break;

        case 15:cur_pos = 3; obs(3);
        console.log("Its a snake. You're going down!")
        break;
        case 30:cur_pos = 13; obs(13);
        console.log("Its a snake. You're going down!")
        break;
        case 56:cur_pos = 28; obs(28);
        console.log("Its a snake. You're going down!")
        break;
        case 83:cur_pos = 37; obs(37);
        console.log("Its a snake. You're going down!")
        break;
        case 90:cur_pos = 57; obs(57);
        console.log("Its a snake. You're going down!")
        break;
    }
    console.log("Your position is "+cur_pos);
    }
}
function go()
{
    do
    {
        play();
    }
    while(a!=100 && b!=100);
    console.log("Game over.");
}