export default function Button({ children, handleClick}) {
  return (
    <button
      onClick={handleClick}
      className="border rounded px-2"
    >
      {children}
    </button>
  );
}
