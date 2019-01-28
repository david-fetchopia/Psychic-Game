var numWins = 0;
var numLosses = 0;
var guessesLeft = 9;

function makeRandomChar() {
    var randomLetter = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<1;i++) {
        randomLetter += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomLetter;
}
var randomLetter = makeRandomChar();


document.onkeydown = function (e) {

    document.getElementById("soFar").innerHTML += e.key + ", ";
    guessesLeft --;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    if (e.key === randomLetter){
        numWins ++;
        document.getElementById("wins").innerHTML = numWins;
        guessesLeft = 9;
        //reset random char
        randomLetter = makeRandomChar();
        document.getElementById("soFar").innerHTML = "";
    }
    else if (guessesLeft === 0) {
        numLosses ++;
        document.getElementById("losses").innerHTML = numLosses;
        guessesLeft = 9;
        document.getElementById("soFar").innerHTML = "";
    }
}