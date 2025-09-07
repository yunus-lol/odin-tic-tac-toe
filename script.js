const board = {
  gameboard: ["", "", "", "", "", "", "", "", ""]
};

function createPlayer(name, marker) {
  return {name, marker};
}

function addMarker(marker, index) {
  board.gameboard.splice(index, 1, marker);
  return board.gameboard;
}

function initialiseGame() {
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");

  let counter = 0
  for (let x = 0; x < board.gameboard.length; x++) {
    if (board.gameboard[x] === "X" || board.gameboard[x] === "O") {
      counter++;
    }
  }

  if (counter === 9) {  // outputs game over if the board is full 
    console.log("Game Over");
  }
}

console.log(addMarker("X", 2));
console.log(addMarker("O", 4));
console.log(addMarker("X", 6));
console.log(addMarker("O", 7));
console.log(addMarker("X", 3));
console.log(addMarker("O", 8));
console.log(addMarker("X", 1));
console.log(addMarker("O", 5));
console.log(addMarker("X", 0));


const winConditions = [
  [0, 1, 2], // rows 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6]
];

initialiseGame();