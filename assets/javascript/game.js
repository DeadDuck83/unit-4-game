//Innitialize after the dom is ready
$(document).ready(function() {
// All code goes in here 
//======================================================

function startGame(){
    //set up variables
    var currentGuessCounter = 0;
    var goalNumber = Math.floor(Math.random() * 100) + 20;
    var winCount = 0;
    var lossCount = 0;
    //kitten values needs to be an empty array so I can rendomly append to it.
    kittenValues = [];

$("#numberToGuess").text(goalNumber);
    // Click events
    $("#kitten1").click(kitten1);
  $("#kitten2").click(kitten2);
  $("#kitten3").click(kitten3);
  $("#kitten4").click(kitten4);

    // generate the 4 numbers for the kittens
    for(i=0;i < 4; i++) {
        var init = (Math.floor(Math.random() * (15 + 1)));
        // making sure that the numbers are not duplicated
        if (kittenValues.indexOf(init) == -1){
        kittenValues.push(init);
    } else {
        i--;
    }
    }
    //assigning numbers to kittens
    var kitten1 = kittenValues[0];
    var kitten2 = kittenValues[1];
    var kitten3 = kittenValues[2];
    var kitten4 = kittenValues[3];
    console.log(kitten1, kitten2, kitten3, kitten4);
    
}
startGame();


//======================================================
// All code goes above here
});