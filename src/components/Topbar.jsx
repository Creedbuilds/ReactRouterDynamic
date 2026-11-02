import {
  Search,
  CalendarDays,
  CircleHelp,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-[70px] bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      <div className="w-[278px] h-[30px] bg-gray-100 rounded-md flex items-center px-3 gap-3">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-transparent outline-none text-[10px] w-full text-gray-700 placeholder:text-gray-400"
        />
      </div>
      <div className="flex items-center gap-6">
        <CalendarDays
          size={16}
          className="text-gray-500"
        />
        <CircleHelp
          size={16}
          className="text-gray-500"
        />
        <div className="relative">
          <Bell size={17} className="text-gray-500" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-400 rounded-full" />
        </div>
        <div className="flex items-center gap-4 ml-4">
          <div className="text-right">
            <h3 className="text-[11px] font-medium text-gray-900">
              Anima Agrawal
            </h3>
            <p className="text-[9px] text-gray-500">
              U.P, India
            </p>
          </div>

          <ChevronDown
            size={14}
            className="text-gray-500"
          />
        </div>
      </div>
    </header>
  );
}
