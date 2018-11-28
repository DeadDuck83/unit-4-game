//Initialize after the dom is ready
$(document).ready(function () {
    // All code goes in here 
    //======================================================
    var kittenImages = [
        "assets/images/bo-jangles.png",
        "assets/images/blue-cartoon-kitty.png",
        "assets/images/flufferton.png",
        "assets/images/garfield.png",
        "assets/images/grumpy-stuff.png",
        "assets/images/meowly-cyrus.png",
        "assets/images/mr-meowgi.png",
        "assets/images/robo-kitty-purple.png",
        "assets/images/robo-kitty-red.png",
        "assets/images/stuffy-kitty.png"];
    var kittenNames = [
        "Bo Jangles",
        "Mr Meowgi",
        "Flufferton",
        "Meowly Cyrus",
        "Just Kittin",
        "Puddy Tat",
        "Wigglebutt",
        "Bigglesworth",
        "Diablo",
        "Muffin",
        "ROBO-kitty",
        "Sammy",
        "Lucifurr",
        "Cat Damon",
        "Tom Paw-ry",
        "Bubble-O-Seven"];
    function startGame() {
        //set up variables

        console.log(kittenNames);
        var currentGuessCounter = 0;
        var goalNumber = Math.floor(Math.random() * 100) + 20;
        var winCount = 0;
        var lossCount = 0;
        //kitten values needs to be an empty array so I can randomly append to it.
        kittenValues = [];
        $("#winCount").text(winCount);
        $("#numberToGuess").text(goalNumber);
        $("#lossCount").text(lossCount);

        // generate the 4 numbers for the kittens
        setNumbers();

        // Click function that adds the numbers and compares them to each other.
        $(".kitten-button").on("click", function () {
            var kittenCounter = ($(this).attr("data-number"));
            kittenCounter = parseInt(kittenCounter);
            currentGuessCounter += kittenCounter;
            $("#currentNumber").text(currentGuessCounter);



            //win / loss logic
            //======================================================
            if (currentGuessCounter === goalNumber) {
                winCount++;
                $('#success').modal('show')

                reset();
            } else if (currentGuessCounter > goalNumber) {
                lossCount++;
                $('#failure').modal('show')
                reset();
            }
        });

        // Reset function after game is over
        function reset() {
            currentGuessCounter = 0;
            goalNumber = Math.floor(Math.random() * 100) + 20;
            setNumbers();
            kittenValues = [];
            $("#winCount").text(winCount);
            $("#numberToGuess").text(goalNumber);
            $("#lossCount").text(lossCount);
            $("#currentNumber").text("00");
        }

    }
    // I had to use this 2 times, so I decided to make it a function
    function setNumbers() {
        for (i = 0; i < 4; i++) {
            var init = (Math.floor(Math.random() * (15 + 1)));
            // making sure that the numbers are not duplicated
            if (kittenValues.indexOf(init) == -1) {
                // push the value to an array
                kittenValues.push(init);
                // Push the data numbers into the buttons for later use
                $('#kitten' + (i + 1)).attr('data-number', init);

                // Set random pictures for kittens on the HTML via array
                // var setKittenName = (Math.floor(Math.random() * 16) + 1);
                // console.log("kitten names:" + setKittenName);
                // kittenNames[i] = kittenNames[setKittenName];


                // Set random kitten names for kittens on HTML via array

            } else {
                i--;
            }
        }
    }




    startGame();


    //======================================================
    // All code goes above here
});