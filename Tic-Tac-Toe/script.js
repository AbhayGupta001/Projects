const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".new-game");
const gameInfo = document.querySelector(".game-info");

let gamegrid = ["","","","","","","","",""];
let currentPlayer = "X";
let winner = "";
let winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initGame(){
    gamegrid = ["","","","","","","","",""];
    newGame.classList.remove("active");
    boxes.forEach(box => {
        // console.log(box)
        box.innerText = "";
        box.classList.remove("clicked");
        box.classList.remove("win");
        box.style.pointerEvents = "all"
    });
    currentPlayer = "X";
    gameInfo.innerText = "Current Player - X"
}

initGame();
newGame.addEventListener('click',initGame)

function swapTurn(){
    if(currentPlayer === "X")
        currentPlayer = "O";
    
    else if(currentPlayer === "O")
        currentPlayer = "X";

    gameInfo.innerText = `Current Player - ${currentPlayer}`
}

function checkWinner(){
    let answer = "";
    winningPositions.forEach((positions)=>{
        if((gamegrid[positions[0]] !== "" || gamegrid[positions[1]] !== "" || gamegrid[positions[2]] !== "") && ((gamegrid[positions[0]] === gamegrid[positions[1]]) && (gamegrid[positions[1]] === gamegrid[positions[2]]))){
            if(gamegrid[positions[0]] === "X")
                answer = "X";
            else
                answer = "O";
            
            setParameter(answer);
            boxes[positions[0]].classList.add("win");
            boxes[positions[1]].classList.add("win");
            boxes[positions[2]].classList.add("win");
            return;
        }
    });

    let count = 0;
    let flag = true;
    gamegrid.forEach((box)=>{
        if(box !== ""){
            count++;
        }
        else{
            flag = false;
            return;
        }
    });

    if(count === 9 && flag && answer === ""){
        gameInfo.innerText = "Game Tied !!!";
        newGame.classList.add("active")
    }
}

function setParameter(winner){
    gameInfo.innerText = ` Winner Player - ${winner} !!!`;
    newGame.classList.add("active")

    // pointer events none for all blocks
    boxes.forEach((box)=>{
        box.style.pointerEvents = "none";
        // box.style.border = "2px solid black"
    })
}

function handleClick(box,index){
    gamegrid[index] = `${currentPlayer}`;
    box.classList.add("clicked");
    box.style.pointerEvents = "none"
    box.innerText = `${currentPlayer}`;
    swapTurn();
    checkWinner();
}

boxes.forEach((box,index) => {
    box.addEventListener('click',(e)=> {
        handleClick(e.target,index);
    })
})

