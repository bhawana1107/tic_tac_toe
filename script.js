let currentPlayer = "X" ;
let arr = Array(9).fill(null);
let gameOver = false;

function showMessage(message, color) {
    const msgBox = document.createElement("div");
    msgBox.innerText = message;
    msgBox.style.color = color;
    msgBox.style.fontSize = "24px";
    msgBox.style.fontWeight = "bold";
    msgBox.style.textAlign = "center";
    msgBox.style.marginTop = "20px";

    document.body.appendChild(msgBox);
}

function checkWinner() {
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) 
    ){
        showMessage(`Winner is ${currentPlayer}`, "red");
        gameOver = true;
        return;
    }

    if (!arr.some (e => e === null)){
        document.write(`Draw !!`);
        return;
    }
}

function handleClick(el) {
    if (gameOver) return;
   const id = Number(el.id);
   if (arr[id] !== null) return ;
   arr[id] = currentPlayer ;
   el.innerText = currentPlayer;
   checkWinner();
   currentPlayer = currentPlayer === "X" ? "0" : "X";
}
