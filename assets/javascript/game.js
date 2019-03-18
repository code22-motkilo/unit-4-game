



// Game Functioanlity
//====================================
//====================================


// wrapper to prevent script from running until all of the DOM is loaded
$(document).ready(function () {

	// random computer chosen score to match
	var randomNumber = 0;

	// win & loss variables
	var wins = 0;
	var losses = 0;

	// variables for gem values.
	// Note the random number will need to be between 1-12.
	var gem_1 = 0;
	var gem_2 = 0;
	var gem_3 = 0;
	var gem_4 = 0;

	// array variable to track "guess score"
	//var guessValues = [];
	var guessTotal = 0;
	var gemValues = [];

	// function for randomly generated numbers between specific ranges
	function getRandomIntInclusive(min,max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function initializeGame () {

		$("#gem-score-box").text("NEW GAME!!....Ready Player 1");

		randomNumber =  getRandomIntInclusive(19, 120);
		gem_1 = getRandomIntInclusive(1, 12);
		gem_2 = getRandomIntInclusive(1, 12);
		gem_3 = getRandomIntInclusive(1, 12);
		gem_4 = getRandomIntInclusive(1, 12);

		$("#random-number-box").text("Random Value to Match: " + randomNumber);

		// add the random generated gem values to an array
		gemValues.push(gem_1);
		gemValues.push(gem_2);
		gemValues.push(gem_3);
		gemValues.push(gem_4);

		// set the buttons to their respective gem values
		$("#gem-1").attr("data-gem-value",gem_1);
		$("#gem-2").attr("data-gem-value",gem_2);
		$("#gem-3").attr("data-gem-value",gem_3);
		$("#gem-4").attr("data-gem-value",gem_4);

		// for testing: delete when done writing progrma
		console.log(gem_1);
		console.log(gem_2);
		console.log(gem_3);
		console.log(gem_4);
		console.log(gemValues);

		// ad logic to prevent gem1-4 from picking the same numbers
	}

	function gameReset () {
		randomNumber =  0;
		gem_1 = 0;
		gem_2 = 0;
		gem_3 = 0;
		gem_4 = 0;
		gemValues = [];
		guessTotal = 0;
		$("#gem-score-box").text("");
	}

	$(".gems").on("click", function() {
		var gemValue = ($(this).attr("data-gem-value"));
		gemValue = parseInt(gemValue);
		guessTotal += gemValue;
		

		if (guessTotal < randomNumber) {
			console.log(guessTotal);
			$("#gem-score-box").text(guessTotal);
		}	
		
		else if (guessTotal === randomNumber){
			$("#gem-score-box").text(guessTotal);
			console.log("you win!!");
			wins++;
			$(".win-score").text("win score: " + wins);
			gameReset();
			initializeGame();
		}
		else {
			console.log("you lose!");
			losses++;
			$(".losses-score").text("losses score: "  + losses);
			gameReset();
			initializeGame();

		}
	});

	initializeGame();
});

