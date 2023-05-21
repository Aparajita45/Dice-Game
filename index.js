var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice1="dice" + randomNumber1+".png";
var randomDiceSrc1="images/"+randomDice1;
document.querySelectorAll("img")[0].setAttribute("src",randomDiceSrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2="dice" + randomNumber2+".png";
var randomDiceSrc2="images/"+randomDice2;
document.querySelectorAll("img")[1].setAttribute("src",randomDiceSrc2);


if(randomDiceSrc1>randomDiceSrc2)
{
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomDiceSrc1<randomDiceSrc2){
    document.querySelector("h1").innerHTML="player2 wins";
}

else{
    document.querySelector("h1").innerHTML="draw";

}


