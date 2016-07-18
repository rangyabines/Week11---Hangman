var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letter.js');
var game = require('./game.js');


var guessWord = 5;
var phraseLength = 0;

function hangman(){
	console.log ("Make a wise decision. You have " + guessWord + " remaining guesses.");
	inquirer.prompt([{

				name: "guess",
				type: "input",
				message: "Guess, Guess, Guess"
	}]).then(function(result){

		var x = word.length;
		
		if(x == 0){
			console.log("Enter a letter:");
		}
		var y = x-1;
		var spaces = 0;
		var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "?", "!", ",", ".", "-", "'");
		for(z = 0; z < word.length; z++){
			var letter = word.substring(y,x);
			if(validChar.indexOf(letter) > -1){
				x--;
				y--;
			}
			else{
				console.log("Remove any special characters.");
			}
		}
		x = word.length;
		y = x-1;
		while (x>0){
			numChar++;
			var letter = word.substring(y,x);
			if(letter === " "){
				spaces++;
			}
			else if(letter === "?" || letter === "!" || letter === "," || letter === "." || letter === "-" || letter === "'"){
				spaces++;
			}
			x--;
			y--;
		}
		phraseLength = word.length - spaces;
		splitWords();
	})
}
hangman();







	

