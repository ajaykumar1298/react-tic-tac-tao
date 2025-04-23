export default function GameStatus({ winner, currentPlayer }) {
  return (
    <div className="text-xl font-semibold mb-4">
      {winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}
    </div>
  );
}
