export default function TaskItem({ task }) {
  return (
    <div className="p-3 border rounded mb-2 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">
          {task.label}
          {task.parallel_group && (
            <span className="ml-2 text-xs bg-blue-100 px-2 py-1 rounded">
              Parallel
            </span>
          )}
        </h3>

        <span>{getStatusIcon(task.status)}</span>
      </div>

      <p className="text-sm text-gray-500">Agent: {task.agent}</p>


      {task.toolCalls?.map((tool, i) => (
        <div key={i} className="text-xs text-blue-600 mt-1">
          🔧 {tool.tool} → {tool.input_summary}
        </div>
      ))}

     
      <div className="mt-2 text-sm">
        {task.outputs?.slice(-1).map((o, i) => (
          <div key={i}>
            {o.is_final ? (
              <span>{o.content}</span>
            ) : (
              <span className="italic text-gray-500 animate-pulse">
                {o.content} (updating...)
              </span>
            )}
          </div>
        ))}
      </div>

      {task.status !== "cancelled" &&
        task.history?.includes("failed") && (
          <div className="text-xs text-red-500 mt-1">
            Failed → Retrying → Running
          </div>
        )}

  
      {task.status === "cancelled" && (
        <p className="text-yellow-500 text-sm mt-1">
          Cancelled (sufficient data)
        </p>
      )}
    </div>
  );
}

function getStatusIcon(status) {
  switch (status) {
    case "running":
      return <span className="animate-pulse">⏳</span>;
    case "complete":
      return "✅";
    case "failed":
      return "❌";
    case "cancelled":
      return "⚠️";
    default:
      return "•";
  }
}