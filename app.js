let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter =="r") return "Rock";
    if(letter =="p") return "Paper";
    return "Scissor";
}


function win(userChoice, computerChoice) {
    userScore++;
    console.log("Win");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " cover " + convertToWord(computerChoice) + ". You Win!";
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green_glow');
    setTimeout(function(){userChoice_div.classList.remove('green_glow')}, 300);

}

function loss(userChoice, computerChoice) {
    computerScore++;
    console.log("Loss");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " coverd by " + convertToWord(computerChoice) + ". You Loss!";
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red_glow');
    setTimeout(function(){userChoice_div.classList.remove('red_glow')}, 300);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " equal to " + convertToWord(computerChoice) + ". It's Draw";
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('grey_glow');
    setTimeout(function(){userChoice_div.classList.remove('grey_glow')}, 300);
}

function game(userChoice) {
    const computerChoice =getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();