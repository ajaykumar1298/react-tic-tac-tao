export default function Cell({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 text-2xl font-bold border border-gray-400 flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
