import TaskCard from "./TaskCard";

export default function BoardColumn({ title, tasks, color }) {
  return (
    <div className="bg-gray-100 p-3 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
         <h3 className="text-xs font-semibold text-gray-900">
         {title}
         </h3>

         <span className="text-[10px] bg-gray-200 text-gray-600 rounded-full px-1.5">
         {tasks.length}
    </span>
  </div>
</div>

{/* Coloured Indicator */}
<div className={`h-[2px] w-full rounded-full mb-4 ${color}`} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}

    </div>
  );
}
