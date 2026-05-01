import { useState } from "react";
import { events } from "./mock/events";
import { useEventPlayer } from "./hooks/useEventPlayer";

import RunHeader from "./components/RunHeader";
import TaskList from "./components/TaskList";
import FinalOutput from "./components/FinalOutput";
import EmptyState from "./components/EmptyState";

function App() {
  const [run, setRun] = useState(null);
  const [tasks, setTasks] = useState({});
  const [finalOutput, setFinalOutput] = useState(null);
  const [thoughts, setThoughts] = useState([]);

  const handleEvent = (event) => {
    switch (event.type) {
      case "run_started":
        setRun({ query: event.query, status: "running" });
        break;

      case "agent_thought":
        setThoughts((prev) =>
          prev.includes(event.thought) ? prev : [...prev, event.thought]
        );
        break;

      case "task_spawned":
        setTasks((prev) => ({
          ...prev,
          [event.task_id]: {
            ...event,
            status: "pending",
            outputs: [],
            toolCalls: [],
            history: [],
          },
        }));
        break;

      case "tool_call":
        setTasks((prev) => {
          const prevTask = prev[event.task_id];
          const newCalls = [...(prevTask.toolCalls || []), event];

          // remove duplicates
          const uniqueCalls = newCalls.filter(
            (v, i, arr) =>
              i === arr.findIndex((t) => t.tool === v.tool)
          );

          return {
            ...prev,
            [event.task_id]: {
              ...prevTask,
              toolCalls: uniqueCalls,
            },
          };
        });
        break;

      case "task_update":
        setTasks((prev) => {
          const prevTask = prev[event.task_id] || {};

          return {
            ...prev,
            [event.task_id]: {
              ...prevTask,
              status: event.status,
              reason: event.reason,
              history: [...(prevTask.history || []), event.status],
            },
          };
        });
        break;

      case "partial_output":
        setTasks((prev) => ({
          ...prev,
          [event.task_id]: {
            ...prev[event.task_id],
            outputs: [...(prev[event.task_id].outputs || []), event],
          },
        }));
        break;

      case "run_complete":
        setRun((prev) => ({ ...prev, status: "complete" }));
        setFinalOutput(event.output);
        break;

      default:
        break;
    }
  };

  useEventPlayer(events, handleEvent);

  if (!run) return <EmptyState />;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <RunHeader run={run} thoughts={thoughts} />
      <TaskList tasks={tasks} />
      <FinalOutput output={finalOutput} />
    </div>
  );
}

export default App;