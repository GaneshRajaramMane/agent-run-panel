import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  const grouped = {};

  Object.values(tasks).forEach((task) => {
    const key = task.parallel_group || task.task_id;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(task);
  });

  return (
    <div className="space-y-4">
      {Object.values(grouped).map((group, i) => (
        <div
          key={i}
          className={
            group.length > 1
              ? "border-l-4 border-blue-400 pl-3"
              : ""
          }
        >
          {group.map((task) => (
            <TaskItem key={task.task_id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}