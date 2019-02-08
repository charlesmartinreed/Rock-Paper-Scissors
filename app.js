const userScore = 0;
const computerScore = 0;

//DOM Variables
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

	function game(userChoice) {
		//grab a random computer choice
		getComputerChoice();
	}

//EVENT LISTENERS for the choice buttons
	function main() {
		rock_div.addEventListener('click', function(){
			game("rock");
		});

		paper_div.addEventListener('click', function(){
			game("paper")
		});

		scissors_div.addEventListener('click', function(){
			game("scissors")
		});
	}

	function getComputerChoice() {
		const choices = ['rock', 'paper', 'scissors'];
		//random number between 0-3; 0, 1, 2
		console.log(Math.floor(Math.random() * choices.length)); //normally a random number between
	}

	main();
