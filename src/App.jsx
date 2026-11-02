import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import TaskDetails from "./components/TaskDetails";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 min-w-0 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </div>
    </div>
  );
}

