const board = {
  gameboard : ["", "", "", "", "", "", "", "", ""]
}

const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function createPlayer(name, marker) {
  return {name, marker}
}

function addMarker(marker, index) {
  board.gameboard[index] += marker
}

function checkWin() {
  for (let x = 0; x < winConditions.length; x++) {
    console.log(winConditions[x])
  }
}

function initialise() {
  const player1 = createPlayer("player 1", "X")
  const player2 = createPlayer("player 2", "O")

  let currentPlayer;
  let playerCounter = 9;

  while (true) {
    if (playerCounter % 2 === 0) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }

    let choice = prompt("Enter index")
    addMarker(currentPlayer.marker, choice)
    playerCounter--

    if (playerCounter === 0) {break}
  }
  console.log(board.gameboard)
}

initialise()