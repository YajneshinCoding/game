let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newb = document.querySelector("#new");
let mc = document.querySelector(".msg-container");
let m = document.querySelector("#msg");

let count = 0;
let turn0 = true//playerx,//player0
let tt;

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
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; //to avoid repeated change of same block
        checkWinner()
        console.log(count)
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
    m.innerText = `Congragulations, Winner is ${winner}`;
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