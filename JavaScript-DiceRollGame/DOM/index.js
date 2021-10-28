var player1= "Player 1";
var player2= "Player 2";

function editNames(){
    player1= prompt("What would Player 1 name like to be?");
    player2= prompt("What would Player 2 name like to be?");
  
    document.querySelector("h2.player1").innerHTML= player1;
    document.querySelector("h2.player2").innerHTML= player2;
}

function rollTheDice(){
    setTimeout(function(){
        var dice1= Math.floor(Math.random()*6)+1;
        var dice2= Math.floor(Math.random()*6)+1;
        document.querySelector(".dice1").setAttribute("src", "dice/dice"+dice1+".png");
        document.querySelector(".dice2").setAttribute("src", "dice/dice"+dice2+".png");
        if (dice1 === dice2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (dice1 < dice2) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        } 
    }, 500);
}
