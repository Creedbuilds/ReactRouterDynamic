import {
  Pencil,
  Link,
  Plus,
  Filter,
  CalendarDays,
  ChevronDown,
  Share2,
  List,
  Grid2X2,
} from "lucide-react";

export default function ProHeader() {
  return (
    <div className="mt-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-[30px] font-bold text-[#15112F]">
            Mobile App
          </h1>
          <button className="bg-violet-100 p-1 rounded-md">
            <Pencil size={13} className="text-violet-600" />
          </button>
          <button className="bg-violet-100 p-1 rounded-md">
            <Link size={13} className="text-violet-600" />
          </button>

        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-violet-600 text-xs">
            <Plus size={13} />
            Invite
          </button>
          <div className="flex items-center -space-x-2">

            <img
              src="https://i.pravatar.cc/100?img=47"
              className="w-7 h-7 rounded-full border-2 border-white"
            />

            <img
              src="https://i.pravatar.cc/100?img=12"
              className="w-7 h-7 rounded-full border-2 border-white"
            />

            <img
              src="https://i.pravatar.cc/100?img=33"
              className="w-7 h-7 rounded-full border-2 border-white"
            />

            <img
              src="https://i.pravatar.cc/100?img=5"
              className="w-7 h-7 rounded-full border-2 border-white"
            />

            <div className="w-7 h-7 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-[9px] text-pink-600">
              +2
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">

          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600">
            <Filter size={13} />
            Filter
            <ChevronDown size={12} />
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600">
            <CalendarDays size={13} />
            Today
            <ChevronDown size={12} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600">
            <Share2 size={13} />
            Share
          </button>
          <div className="h-6 border-l border-gray-300" />
          <button className="bg-violet-600 text-white p-2 rounded-md">
            <List size={17} />
          </button>
          <button className="text-gray-500 p-1">
            <Grid2X2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
