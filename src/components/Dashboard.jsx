import Topbar from "./Topbar";
import ProHeader from "./ProHeader";
import Board from "./Board";

export default function Dashboard() {
  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto">
      <Topbar />
      <div className="px-8 pb-8">
        <ProHeader />
        <Board />
      </div>
    </div>
  );
}

