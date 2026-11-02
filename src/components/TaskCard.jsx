import { MessageSquare, Paperclip, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router";

export default function TaskCard({ task }) {
    const priorityColor =  task.priority === "High" ? "bg-red-50 text-red-500"
    : task.priority === "Completed" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-500";

    const navigate = useNavigate();
  return (
    <div  onClick={()=> navigate(`/tasks/${task.id}`)}
    className="bg-white p-4 rounded-lg mb-4 border border-gray-200 cursor-pointer hover:shadow-md transition">

      <div className="flex justify-between items-center mb-3">
        <span className={`text-xs px-2 py-1 rounded ${priorityColor}`}>
          {task.priority}
          </span>
        <MoreHorizontal size={16} className="text-gray-500" />
      </div>

      <h3 className="text-sm font-bold text-gray-800 mb-2">
        {task.title}
      </h3>

      <p className="text-xs text-gray-500 mb-4">
        {task.description}
      </p>

      <div className="flex justify-between text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <MessageSquare size={13} />
          {task.comments}
        </span>

        <span className="flex items-center gap-1">
          <Paperclip size={13} />
          {task.files}
        </span>
      </div>

    </div>
  );
}

