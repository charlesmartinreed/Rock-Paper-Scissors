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

	// setTimeout(function(){
	// 	console.log("hello")}, 3000);

	function win(userChoice, computerChoice) {
		const userChoice_div = document.getElementById(userChoice);
		userScore++;

		//update the score
		userScore_span.innerHTML = userScore;
		computerScore_span.innerHTML = computerScore;

		//update the result
		result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win! 🔥`;

		//add the class to the clicked div
		//classList is an array of classes on that element
		userChoice_div.classList.add('green-glow');
		setTimeout(function(){
			//remove the class after 300 millisecond
			userChoice_div.classList.remove('green-glow');
		}, 300);
	}

	function lose(userChoice, computerChoice) {
		const userChoice_div = document.getElementById(userChoice);
		computerScore++;
		computerScore_span.innerHTML = computerScore;
		userScore_span.innerHTML = userScore;
		result_p.innerHTML = `${userChoice} is beaten by ${computerChoice}. You lose! 😢`;
		userChoice_div.classList.add('red-glow');
		setTimeout(function(){
			userChoice_div.classList.remove('red-glow');
		}, 300);
	}

	function draw(userChoice, computerChoice) {
		const userChoice_div = document.getElementById(userChoice);
		result_p.innerHTML = `${userChoice} vs ${computerChoice}? It's a draw!`;
		userChoice_div.classList.add('gray-glow');
		setTimeout(function(){
			userChoice_div.classList.remove('gray-glow');
		}, 300);
	}

	main();
