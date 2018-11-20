//Initialize after the dom is ready
$(document).ready(function () {
    // All code goes in here 
    //======================================================

    function startGame() {
        //set up variables
        var currentGuessCounter = 0;
        var goalNumber = Math.floor(Math.random() * 100) + 20;
        var winCount = 0;
        var lossCount = 0;
        //kitten values needs to be an empty array so I can randomly append to it.
        kittenValues = [];

        $("#numberToGuess").text(goalNumber);


        // generate the 4 numbers for the kittens
        for (i = 0; i < 4; i++) {
            var init = (Math.floor(Math.random() * (15 + 1)));
            // making sure that the numbers are not duplicated
            if (kittenValues.indexOf(init) == -1) {
                // push the value to an array
                kittenValues.push(init);
                // Push the data numbers into the buttons for later use
                $('#kitten' + (i + 1)).attr('data-number', init);
            } else {
                i--;
            }
        }

        $(".kitten-button").on("click", function () {


            var kittenCounter = ($(this).attr("data-number"));
            kittenCounter = parseInt(kittenCounter);

            currentGuessCounter += kittenCounter;
            $("#currentNumber").text(currentGuessCounter);
            console.log(currentGuessCounter);


//win / loss logic

if (currentGuessCounter === goalNumber) {
    winCount++;


    function delay() {
        alert("YOU WON!! Math must be your favorite subject!");

    }

    setTimeout(delay, 300);
} else if (currentGuessCounter > goalNumber) {
    lossCount++;


    function delay() {
        alert("You lost :( You should Study a little more");

    }

    setTimeout(delay, 300);

}

        });

        

        // Reset function after game is over



        console.log(kittenValues);
        console.log(currentGuessCounter);

    }
    startGame();


    //======================================================
    // All code goes above here
});