import { useEffect, useState } from "react";

export default function RunHeader({ run, thoughts }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold text-lg">{run.query}</h2>
      <p>Status: {run.status}</p>
      <p>Time: {time}s</p>

      <div className="mt-2 bg-gray-50 p-2 rounded">
        {thoughts.slice(-1).map((t, i) => (
          <p key={i} className="text-xs italic text-gray-500">
            💭 {t}
          </p>
        ))}
      </div>
    </div>
  );
}