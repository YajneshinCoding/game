let userScore=0;
let compScore=0;
let userScorep=document.querySelector("#user-score");
let compScorep=document.querySelector("#comp-score");
let images=document.querySelectorAll("img");
let choices=document.querySelectorAll(".choice");
let fW = document.querySelector(".finalWinner");
let fin = document.querySelector(".finWin");
let finn = document.querySelector(".newGam");
let msg = document.querySelector("#msg");
let nw = document.querySelector(".new");
let dis = document.querySelector(".choices");
let start =  document.querySelector(".start");
let srt =  document.querySelector(".str");
let b=true;
let a;
let input = document.querySelector("#input-box");
let add = document.querySelector(".add");
let enter = document.querySelector(".enter");
fin.classList.add("hide");
finn.classList.add("hide");
srt.classList.remove("hide");

function addon(){
    add.addEventListener("click", ()=> {
        if (input.value==='') {
            alert("You must write something");
            exit();
         }
         else if (!Number.isInteger(Number(input.value))) {
            alert("Please enter a valid integer");
            input.value = "";
            exit();
        }
        
         else{
            
            a = input.value;
            enter.classList.add("hide");
            dis.classList.remove("stop");
            
         }
         input.value = "";
    });};

// setTimeout(a,10000)
start.addEventListener("click",()=> {
    srt.classList.add("hide")
    enter.classList.remove("hide")
    // a=prompt("Enter the winning points");
    addon();
    
    
})
nw.addEventListener("click", () => {
    //dis.classList.remove("stop");
    srt.classList.remove("hide");
    userScore=0;
    userScorep.innerText = userScore;
    compScore=0;
    compScorep.innerText = compScore;
    msg.style.backgroundColor = "#0de0e0";
    msg.innerText = "Your Move";
    fin.classList.add("hide");
finn.classList.add("hide");
    
});



const pio = () => {
    if (userScore==a) {
        console.log("user");
        fW.innerText = `You Won by ${a} points`;
        fin.classList.remove("hide");
        finn.classList.remove("hide");
        dis.classList.add("stop");
        
    }
    if (compScore==a) {
        console.log("comp");
        fW.innerText = `Computer Won by ${a} points`;
        fin.classList.remove("hide");
        finn.classList.remove("hide");
        dis.classList.add("stop");

    }

}
// const disable = () => {
// choices.forEach((box) => {
//     box.disabled=true;
//     });}

const drawGame = () => {  //Draw condition
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Try Again!";
    msg.style.backgroundColor = "yellow";

};

const showWinner = (userWin, userChoice, compChoice) => {  //winner show and scotre show
    if (userWin) {
        userScore++;
        userScorep.innerText = userScore;
        console.log("You win");
        msg.innerText = `You Won! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "#90EE90";
        
    }
    else{
        compScore++;
        compScorep.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lost! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    pio();
}

const getCompChoice = () => {  //generate computer choice
    const opt = ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random() * 3); //Math.floor = to remo decimal & Math.random = to display random no. betwn
    return opt[randidx];
}

const playGame = (userChoice) => { //generate user choice
    console.log("User choice = ",userChoice);
    const compChoice = getCompChoice();
    console.log("Comp choice = ",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice==="rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        // else if (userChoice === "scissors") {
        //     userWin = compChoice === "rock" ? false : true;
        // }
        showWinner(userWin, userChoice, compChoice);

    }
}



choices.forEach((choice) => {    //learn user choice
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});