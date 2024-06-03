let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");

// Function to generate the computer's choice
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * options.length);
    return options[randIndx];
};

// Function to handle a draw game
const drawGame = () => {
   
    msg.innerText = "It's a DRAW!";
};

// Function to update the score and display the result
const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
       
        msg.innerText = " 🥳 YOU WIN! 🥳";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
       
        msg.innerText = "☹️ YOU LOSE! ☹️";
    }
};

// Function to play a round of the game
const playgame = (userchoice) => {
    console.log("user choice:", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice:", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "scissors";
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock";
        } else if (userchoice === "scissors") {
            userwin = compchoice === "paper";
        }
        showwinner(userwin);
    }
};

// Add event listeners to the choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
