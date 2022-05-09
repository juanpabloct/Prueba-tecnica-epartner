export default function Button({ text, size }) {
  return (
    <button
      className={
        "bg-lime-200 text-lg mx-auto mt-2 rounded-sm text-teal-800 font-semibold relative " +
        size
      }
    >
      {text}
    </button>
  );
}
