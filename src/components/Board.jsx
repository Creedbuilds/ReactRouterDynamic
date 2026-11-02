import BoardColumn from "./Boardcolumn";

export const tasks = [
    {
      id: 1,
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      comments: 12,
      files: 0,
      status: "todo",
    },
    {
      id: 2,
      title: "Research",
      description: "User research helps you create an optimal product.",
      priority: "High",
      comments: 10,
      files: 3,
      status: "todo",
    },
    {
      id: 3,
      title: "Wireframes",
      description: "Low fidelity wireframes include basic content and visuals.",
      priority: "High",
      comments: 0,
      files: 0,
      status: "todo",
    },
    {
      id: 4,
      title: "Onboarding Illustrations",
      description: "Create beautiful illustrations for onboarding.",
      priority: "Low",
      comments: 14,
      files: 15,
      status: "progress",
    },
    {
      id: 5,
      title: "Moodboard",
      description: "Collect visual inspiration for the application.",
      priority: "Low",
      comments: 9,
      files: 10,
      status: "progress",
    },
    {
      id: 6,
      title: "Mobile App Design",
      description: "Complete the mobile application design.",
      priority: "Completed",
      comments: 12,
      files: 15,
      status: "done",
    },
    {
      id: 7,
      title: "Design System",
      description: "Adapt the UI to the approved design system.",
      priority: "Completed",
      comments: 12,
      files: 15,
      status: "done",
    },
    {
  id: 8,
  title: "User Testing",
  description: "Test the application with potential users.",
  priority: "High",
  comments: 8,
  files: 2,
  status: "todo",
},
{
  id: 9,
  title: "Mobile App Screens",
  description: "Review and complete the remaining app screens.",
  priority: "Low",
  comments: 6,
  files: 4,
  status: "progress",
},
  ];


export default function Board() {

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = tasks.filter(
    (task) => task.status === "progress"
  );

  const doneTasks = tasks.filter(
    (task) => task.status === "done"
  );

  return (
    <div className="grid grid-cols-3 gap-5 mt-6">

      <BoardColumn
        title="To Do"
        tasks={todoTasks}
        color="bg-violet-600"
      />

      <BoardColumn
        title="On Progress"
        tasks={progressTasks}
        color="bg-orange-400"
      />

      <BoardColumn
        title="Done"
        tasks={doneTasks}
        color="bg-green-500"
      />

    </div>
  );
}

