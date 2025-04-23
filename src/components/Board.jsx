import Cell from "./Cell";

export default function Board({ board, handleClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((cell, idx) => (
        <Cell key={idx} value={cell} onClick={() => handleClick(idx)} />
      ))}
    </div>
  );
}
