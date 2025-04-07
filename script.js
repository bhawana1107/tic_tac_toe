let currentPlayer = "X" ;
let arr = Array(9).fill(null);
let gameOver = false;

function showMessage(message, color) {
    const msg = document.getElementById("message");
    msg.innerText = message;
    msg.style.color = color;

    const container = document.getElementById("message-box");
    container.style.display = "flex";

    document.getElementById("restart").style.display = "block";
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
        showMessage(`Match Draw !!`, "orange");
        gameOver = true;
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
