let userScore = 0; // Corrected from userScorce to userScore
let compScore = 0;

// Access choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const UserScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
};

// Draw game function
const DrawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = "Game Draw, Play Again!";
    msg.style.backgroundColor = "#2B2C28";
};

// Show winner function
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Increment user score
        UserScorePara.innerText = userScore;
        console.log("You Win!!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // Increment computer score
        CompScorePara.innerText = compScore;
        console.log("You Lose..");
        msg.innerText = `You Lose.. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

    console.log(`User: ${userScore}, Computer: ${compScore}`);
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    // Generate computer choice
    const compChoice = generateCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        DrawGame();
    } else {
        // Track the win of the user
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice clicked", userChoice);
        playGame(userChoice);
    });
});
