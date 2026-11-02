import { useParams, useNavigate } from "react-router";
import { tasks } from "./Board";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((task) => String(task.id) === id);

  if (!task) {
    return <h2 className="p-8">Task not found.</h2>;
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-violet-600">
        Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold">{task.title}</h1>

      <p className="mt-3 text-gray-500">
        {task.description}
      </p>

      <div className="mt-6 space-y-2">
        <p>Priority: {task.priority}</p>
        <p>Comments: {task.comments}</p>
        <p>Files: {task.files}</p>
        <p>Status: {task.status}</p>
      </div>
    </div>
  );
}

