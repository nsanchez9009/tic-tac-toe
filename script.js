function playerFactory(name, turn){
    return {name, turn, moves: []};
}

function checkWin(player){
    const movesArray = player.moves.sort(function(a, b){return a-b});
    
    for (let i = 0; i < 8; i++){
        const temp = possibleWins[i].split("");
        let matches = 0;
        let x = 0;
        let y = 0;
        for (let j = 0; j < movesArray.length; j++){
            if (temp[x] === movesArray[y]) {
                matches++;
                x++;
                y++;
            }
            else if (temp[x] !== movesArray[y]){
                y++;
            }
        }
        if (matches >= 3) {return true;}
    }
    return false;
}

function restart(){

}

function makeMove(player, player2, box){
    if (gameBoard[box.dataset.number].played === false) {
        player.moves.push(box.dataset.number);
        gameBoard[box.dataset.number].value = player.name;
        gameBoard[box.dataset.number].played = true;
        box.textContent = player.name;

        if(checkWin(player)){
            gameStatus.textContent = `Player ${player.name} wins!`;
            game.gameOver = true;
            return;
        }

        gameStatus.textContent = `Player ${player2.name}'s turn`;
        
        player.turn = false;
        player2.turn = true;

        game.moves++;

        if (game.moves === 9){
            gameStatus.textContent = "Draw!";
            game.gameOver = true;
        }
    }
    else {
        player.turn = true;
    }
}

const gameStatus = document.querySelector("#gameStatus");
const possibleWins = ["012", "345", "678", "036", "147", "258", "048", "246"];
const playerX = playerFactory("X", true);
const playerO = playerFactory("O", false);
const gameBoard = [];
const game = {
    moves: 0,
    gameOver: false,
}

for (let i = 0; i < 9; i++){
    gameBoard[i] = {value: "", played: false};
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("click", () => {

    if (game.gameOver === true) {
        return;
    }

    else if (playerX.turn === true) {
        makeMove(playerX, playerO, box);
        return;
    }
    else if (playerO.turn === true) {
        makeMove(playerO, playerX, box);
    }
}));

