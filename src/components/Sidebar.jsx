import {
  Layers,
  Home,
  MessageSquare,
  ListTodo,
  Users,
  Settings,
  Plus,
  MoreHorizontal,
  Lightbulb,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[240px] h-[700px] sticky top-0 bg-white border-r border-gray-200 flex flex-col shrink-0">
      <div className="h-[70px] px-4 flex items-center gap-2 border-b border-gray-200">
        <Layers size={17} className="text-violet-600" />

        <h2 className="text-sm font-bold text-gray-900">
          Project M.
        </h2>
      </div>

      <div className="px-3 py-4 space-y-1">

        <div className="flex items-center gap-3 px-1 py-2 text-gray-500 text-xs">
          <Home size={16} />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-3 px-1 py-2 text-gray-500 text-xs">
          <MessageSquare size={16} />
          <span>Messages</span>
        </div>

        <div className="flex items-center gap-3 px-1 py-2 text-gray-500 text-xs">
          <ListTodo size={16} />
          <span>Tasks</span>
        </div>

        <div className="flex items-center gap-3 px-1 py-2 text-gray-500 text-xs">
          <Users size={16} />
          <span>Members</span>
        </div>

        <div className="flex items-center gap-3 px-1 py-2 text-gray-500 text-xs">
          <Settings size={16} />
          <span>Settings</span>
        </div>

      </div>

      <div className="mx-2 border-t border-gray-200" />
      <div className="px-2 pt-5">
        <div className="flex items-center justify-between px-1 mb-3">
          <h3 className="text-[9px] font-bold text-gray-500">
            MY PROJECTS
          </h3>
          <Plus size={12} className="text-gray-500" />
        </div>

        <div className="flex items-center justify-between bg-violet-100 rounded-md px-2 py-2 mb-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[11px] font-semibold text-gray-900">
              Mobile App
            </span>
          </div>

          <MoreHorizontal size={15} className="text-gray-700" />

        </div>
        <div className="space-y-1">

          <div className="flex items-center gap-2 px-2 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-[11px] text-gray-500">
              Website Redesign
            </span>
          </div>

          <div className="flex items-center gap-2 px-2 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
            <span className="text-[11px] text-gray-500">
              Design System
            </span>
          </div>

          <div className="flex items-center gap-2 px-2 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-[11px] text-gray-500">
              Wireframes
            </span>
          </div>

        </div>

      </div>
      <div className="mt-auto p-3 pb-5">

        <div className="bg-gray-100 rounded-xl px-3 py-5 text-center">

          <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-3">
            <Lightbulb size={19} className="text-yellow-500" />
          </div>

          <h3 className="text-[10px] font-semibold text-gray-900 mb-2">
            Thoughts Time
          </h3>

          <p className="text-[9px] leading-4 text-gray-500 mb-3">
            We don't have any notice for you, till then you can share your thoughts with your peers.
          </p>

          <button className="w-full bg-white rounded-md py-2 text-[9px] font-semibold text-gray-800">
            Write a message
          </button>

        </div>

      </div>

    </aside>
  );
}

