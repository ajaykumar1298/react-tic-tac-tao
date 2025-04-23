import { useState } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const currentPlayer = xIsNext ? "X" : "O";

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-4 bg-white shadow-lg rounded-md">
        <GameStatus winner={winner} currentPlayer={currentPlayer} />
        <Board board={board} handleClick={handleClick} />
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default App;
