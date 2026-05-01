export default function FinalOutput({ output }) {
  if (!output) return null;

  return (
    <div className="mt-6 p-5 border-2 border-green-500 bg-green-50 rounded shadow">
      <h2 className="font-bold text-green-700 text-lg">
        Final Output
      </h2>
      <p className="mt-2">{output.summary}</p>
    </div>
  );
}