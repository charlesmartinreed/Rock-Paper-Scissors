let userScore = 0;
let computerScore = 0;

//DOM Variables
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

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

	function game(userChoice) {
		//grab a random computer choice
		const computerChoice = getComputerChoice();

		//compare userChoice with computerChoice
		switch (userChoice + computerChoice) {
			//win cases
			case "rockscissors":
			case "scissorspaper":
			case "paperrock":
				win(userChoice, computerChoice);
				break;
			//lose cases
			case "rockpaper":
			case "scissorsrock":
			case "paperscissors":
				lose(userChoice, computerChoice);
				break;
			//draw cases
			case "rockrock":
			case "paperpaper":
			case "scissorsscissors":
				draw(userChoice, computerChoice);
				break;
		}
	}

	function getComputerChoice() {
		const choices = ['rock', 'paper', 'scissors'];
		//random number between 0-3; 0, 1, 2
		const randomNumber = Math.floor(Math.random() * choices.length);
		return choices[randomNumber];
	}

	function win(userChoice, computerChoice) {
		userScore++;
		//update the page
		userScore_span.innerHTML = userScore;
		computerScore_span.innerHTML = computerScore;
		result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win! 🔥`;
	}

	function lose(userChoice, computerChoice) {
		computerScore++;

		computerScore_span.innerHTML = computerScore;
		userScore_span.innerHTML = userScore;
		result_p.innerHTML = `${userChoice} is beaten by ${computerChoice}. You lose! 😢`;
	}

	function draw(userChoice, computerChoice) {
		result_p.innerHTML = `${userChoice} vs ${computerChoice}? It's a draw!`;
	}

	main();
