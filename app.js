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
		const computerChoice = getComputerChoice();

		//compare userChoice with computerChoice
		switch (userChoice + computerChoice) {
			//win cases
			case "rs":
			case "sp":
			case "pr":
				console.log("USER WINS");
				break;
			//lose cases
			case "rp":
			case "sr":
			case "ps":
				console.log("USER LOSES");
				break;
			//draw cases
			case "rr":
			case "pp":
			case "ss":
				console.log("DRAW");
				break;
		}
	}

//EVENT LISTENERS for the choice buttons
	function main() {
		rock_div.addEventListener('click', function(){
			game("r");
		});

		paper_div.addEventListener('click', function(){
			game("p")
		});

		scissors_div.addEventListener('click', function(){
			game("s")
		});
	}

	function getComputerChoice() {
		const choices = ['r', 'p', 's'];
		//random number between 0-3; 0, 1, 2
		const randomNumber = Math.floor(Math.random() * choices.length);
		return choices[randomNumber];
	}

	main();
