let userScr = 0;
let showUserScr = document.querySelector("#userScore");
let compScr = 0;
let showCompScr = document.querySelector("#compScore");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    console.log("It was a Draw");
    msg.innerText = "It was a Draw!!";
    msg.style.backgroundColor = "#5DFDCB";
}

const showWinner = (userWin , choiceId , compChoice) => {
    if(userWin){
        console.log("You Won!!");
        msg.innerText = `You Won!! , Your ${choiceId} beats ${compChoice}`;
        userScr++;
        showUserScr.innerText = userScr;
        msg.style.backgroundColor = "#7CC6FE";
    }
    else{
        console.log("You Lost!!");
        msg.innerText = `You Lost!! , ${compChoice} beats Your ${choiceId}`;
        compScr++;
        showCompScr.innerText = compScr;
        msg.style.backgroundColor = "#8789C0";
    }
}

const playGame = (choiceId) => {
      console.log(`User Choosed ${choiceId}`);
      //generate computer choice;
      const compChoice = generateComputerChoice();
      console.log(`Computer Choosed ${compChoice}`);

      if(choiceId === compChoice){
             drawGame();
      }
      else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        if(choiceId === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        if(choiceId === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , choiceId , compChoice);
      }
}

choices.forEach((choice)=>{
      choice.addEventListener(("click") , () => {
             const choiceId = choice.getAttribute("id");
            //  console.log("clicked",choiceId);
             playGame(choiceId);
      })
})