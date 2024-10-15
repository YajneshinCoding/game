let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newb = document.querySelector("#new");
let mc = document.querySelector(".msg-container");
let m = document.querySelector("#msg");
let count = 0;
let turn0 = true//playerx,//player0
let tt;

const compmov = () => {
    const availableBoxes = Array.from(boxes).filter(box => box.innerText === ""); 
    if (availableBoxes.length > 0) {
    const randidx = Math.floor(Math.random() * availableBoxes.length);  // Choose a random empty box
                const selectedBox = availableBoxes[randidx];
                selectedBox.innerText = "O";  // Mark the box with "X"
                selectedBox.disabled = true;
                checkWinner()}
}
const winPatterns = [             //Winning Patterns
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
const resetg = () => {        //Reset Or New game
    turn0 = true;
    enable();
    mc.classList.add("hide");
    reset.classList.remove("hide")
    count = 0;
    tt=undefined;
}
boxes.forEach((box) => {                           //Event of clicking each button
    box.addEventListener("click", () => {
        console.log("box was clicked");
        count++;
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
            box.disabled = true; //to avoid repeated change of same block
        checkWinner()
        console.log(count)
        }
        if(!tt && count < 9){
        

            // Find empty boxes
            
                
                setTimeout(compmov,300)
                
                
                
                // Disable the box after marking
                count++;
                // box.innerText = "O";
                turn0 = true;
                 //to avoid repeated change of same block
        
        console.log(count)
        }
        
    });
});
const disable = () => {               //to avoid further game even after winning
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enable = () => {                //to reset the disabled feature when game starts again
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {         //To display winner
    if (winner=="X") {
        m.innerText = "You WON";
    }
    else{
        m.innerText = `You LOST, Computer wins`;
    }
    mc.classList.remove("hide");
    disable()
    reset.classList.add("hide")
}
const checkWinner = () => {                         //To check winner
    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {    //To avoid null buttons
            if (pos1 === pos2 && pos2 === pos3) {           //winning condition
                tt = pos1;
            }



        }
    }
    if (tt) {
        console.log(tt, "is Winner");
        showWinner(tt);

    }
    else if (count === 9) {     //Draw condition

        m.innerText = `Match has been draw`;
        mc.classList.remove("hide");
        disable()
        reset.classList.add("hide")
        console.log("wrong")


    }
};
newb.addEventListener("click", resetg); //showcase newgame
reset.addEventListener("click", resetg) //showcase reset