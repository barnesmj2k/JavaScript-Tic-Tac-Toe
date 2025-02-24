const board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = 'X';

function makeMove(index) {
  if (!board[index]) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + ' wins!');
      resetBoard();
    } else if (board.every((cell) => cell !== null)) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetBoard() {
  board.fill(null);
  document.querySelectorAll('.cell').forEach((cell) => (cell.textContent = ''));
  currentPlayer = 'X';
}
